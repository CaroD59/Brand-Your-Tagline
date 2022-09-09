import React, { useEffect, useState } from 'react';
import { GiDirectorChair } from 'react-icons/gi';
import { AiTwotoneCalendar, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import MainPageStyle from './styles';

const MainPage = () => {
  // Appel d'API
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films').then(({ data }) => {
      setMovies(data);
    });
  }, []);

  // Barre de recherche avec filter
  const [searchMovie, setSearchMovie] = useState('');

  const allMovies = movies
    .filter((value) => {
      if (searchMovie === '') {
        return value;
      } else if (value.title.includes(searchMovie)) {
        return value;
      }
    })
    .map((movie, index) => {
      return (
        <>
          <section className='card' key={index}>
            <figure>
              <img
                src='/img/default.svg'
                alt='Brand Movie'
                className='movie-img'
              />
            </figure>
            <figcaption>{movie.title}</figcaption>
            <div className='infos'>
              <p>
                <span className='icon'>
                  <GiDirectorChair />
                </span>{' '}
                {movie.director}
              </p>
              <p>
                <span className='icon'>
                  <AiTwotoneCalendar />
                </span>{' '}
                {movie.release_date}
              </p>
              <p className='description'>
                {movie.description} <span className='suite'>Suite...</span>
              </p>
            </div>
          </section>
        </>
      );
    });

  return (
    <MainPageStyle>
      <>
        <h1>Ma super page de recherche</h1>
        {/* Barre de recherche */}
        <form action='/' methode='get' className='Search-Bar'>
          <input
            type='text'
            id='searchbar'
            className='searchbar'
            placeholder='Rechercher un titre, un réalisateur...'
            onChange={(e) => {
              setSearchMovie(e.target.value);
            }}
          />
          <button className='search-button' type='submit'>
            <AiOutlineSearch /> OK
          </button>
        </form>
        {/* Mes films */}
        <article className='Movie-Card'>{allMovies}</article>
      </>
    </MainPageStyle>
  );
};

export default MainPage;