import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding-geral);
  margin-top: 15px;

  & .container-geral {
    display: flex;
    justify-content: space-between;
    font-size: 13px;

    & :first-child {
      font-weight: bold;
    }

    & .status-container {
      display: flex;
      gap: 10px;

      & .moeda-container {
        margin-right: 50px;
      }

      & .clima-container {
        display: flex;
        gap: 5px;
        cursor: pointer;

        > p {
          font-weight: bold;
        }
      }

      & .tempo-container {
        display: flex;
        gap: 5px;

        & :nth-child(2),
        & :nth-child(3) {
          font-weight: bold;
        }
      }
    }
  }
  & .barra {
    background-color: var(--preto);
    width: 100%;
    height: 13px;
    margin-top: 10px;
  }
`;