import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: var(--padding-geral);
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 20px 0px;

  & .img-container {
    user-select: none;

    & img {
      width: 300px;
    }
  }

  @media (max-width: 500px) {
    & .img-container {
      & img {
        width: 250px;
      }
    }
  }

  @media (max-width: 380px) {
    & .img-container {
      & img {
        width: 180px;
      }
    }
  }
`;