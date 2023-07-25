import styled from "styled-components";

const comum = `
display: flex;
width: 100%;
height: 100%;
`;

export const Container = styled.div`
  padding: var(--padding-geral);
  display: flex;
  flex-direction: column;

  & .container-geral {
    ${comum}
    margin-bottom: 10px;
    gap: 30px;

    & .noticia-maior,
    & .outras-noticias {
      ${comum}
      padding: 30px 30px 10px 30px;
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

  @media (max-width: 1200px) {
    & .container-geral {
      gap: 0px;

      & .noticia-maior,
      & .outras-noticias {
        padding: 30px 10px 10px 10px;
      }
    }
  }

  @media (max-width: 1100px) {
    & .container-geral {
      & .noticia-maior,
      & .outras-noticias {
        padding: 30px 5px 10px 5px;
      }
    }
  }

  @media (max-width: 1070px) {
    & .container-geral {
      flex-direction: column;
      justify-content: center;

      & .noticia-maior,
      & .outras-noticias {
        justify-content: center;
        padding: 30px 30px 10px 30px;
      }
    }
  }

  @media (max-width: 650px) {
    & .container-geral {
      & .noticia-maior,
      & .outras-noticias {
        padding: 30px 10px 10px 10px;
      }
    }
  }
`;