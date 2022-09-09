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
  const [searchFieldValue, setSearchFieldValue] = useState('');
  // Lire la suite de la description
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

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
                {isReadMoreShown
                  ? movie.description
                  : movie.description.substr(0, 180)}{' '}
                <span className='suite' onClick={toggleBtn}>
                  {isReadMoreShown ? ' Fermer' : ' Suite...'}
                </span>
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
        <div className='Search-Bar'>
          <input
            type='text'
            id='searchbar'
            className='searchbar'
            placeholder='Rechercher un titre, un réalisateur...'
            onChange={(e) => {
              setSearchFieldValue(e.target.value);
            }}
          />
          <button
            className='search-button'
            onClick={(e) => {
              setSearchMovie(searchFieldValue);
            }}
          >
            <AiOutlineSearch /> OK
          </button>
        </div>
        {/* Mes films */}
        <article className='Movie-Card'>{allMovies}</article>
      </>
    </MainPageStyle>
  );
};

export default MainPage;
