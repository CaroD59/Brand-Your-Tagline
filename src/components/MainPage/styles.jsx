import styled from 'styled-components';

const MainPageStyles = styled.div`
  h1 {
    font-weight: bold;
    font-size: 50px;
    margin: 50px;
  }

  /* Barre de recherche css */

  .Search-Bar {
    text-align: center;
    .searchbar {
      width: 50%;
      padding: 15px;
      border: none;
      border-top: 1px solid #d1cfcf;
      border-bottom: 1px solid #d1cfcf;
      outline: none;
    }
    .searchbar::placeholder {
      opacity: 0.5;
      font-style: italic;
      font-size: 15px;
    }
    .search-button {
      background-color: #1c8a00;
      color: #fff;
      border: none;
      padding: 15px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      cursor: pointer;
    }
  }

  /* Carte du film */

  .Movie-Card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px;
    .card {
      border: 1px solid #d1cfcf;
      border-radius: 5px;
      width: 300px;
      margin: 50px;
      figure {
        border-bottom: 1px solid #d1cfcf;
      }
      figcaption {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        padding-top: 20px;
      }
      .infos {
        padding: 10px;
      }
      .movie-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
      }

      .description {
        text-align: left;
        padding-top: 20px;
        .suite {
          font-weight: bold;
          color: #841919;
          cursor: pointer;
        }
      }
      .icon {
        color: #841919;
        font-size: 20px;
      }
    }
  }
`;

export default MainPageStyles;
