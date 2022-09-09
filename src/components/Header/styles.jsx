import styled from 'styled-components';

const HeaderStyle = styled.div`
  .Header,
  .Links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .Logo-Section {
      padding-top: 20px;
    }

    li {
      margin-left: 100px;
      a {
        text-decoration: none;
        color: #841919;
        font-weight: bold;
      }
    }
  }
`;

export default HeaderStyle;
