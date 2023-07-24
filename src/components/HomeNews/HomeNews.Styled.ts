import styled from "styled-components";

const comum = `
display: flex;
width: 100%;
height: 100%;
`;

export const Container = styled.div`
  padding: var(--padding-geral);
  height: 600px;
  display: flex;
  flex-direction: column;

  & .container-geral {
    ${comum}
    margin-bottom: 10px;
    gap: 30px;

    & .noticia-maior,
    & .outras-noticias {
      ${comum}
      padding: 30px 30px 0px 30px;
    }

    & .noticia-maior {
      display: flex;
      flex-direction: column;
      background-color: red;

      & .link-container {
        text-decoration: none;
        color: var(--preto-fonte);

        & .img-container {
          width: 100%;
  
          & img {
            width: 100%;
            height: 300px;
          }
        }
  
        & .categoria-container {
          display: flex;
          gap: 5px;
          margin: 10px 0px;
  
          & .item {
            border: 1px solid var(--border-color);
            border-radius: 50px;
            padding: 1px 10px;
          }
        }
      }

    }

    & .outras-noticias {
      background-color: green;
    }
  }

  & .mais-noticiais {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;

    & p {
      border: 1px solid var(--border-color);
      font-weight: bold;
      border-radius: 50px;
      padding: 1px 10px;
    }
  }
`;
