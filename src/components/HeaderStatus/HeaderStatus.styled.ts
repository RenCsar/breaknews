import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding-geral);
  margin-top: 15px;

  & .container-geral {
    display: flex;
    justify-content: space-between;
    font-size: 13px;

    & .data {
      font-weight: bold;
    }

    & .status-container {
      display: flex;
      gap: 10px;

      & .moeda-container {
        margin-right: 20px;
        width: 140px;
        height: 30px;
        user-select: none;
      }

      & .weather {
        display: flex;
        gap: 15px;

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
  }
  & .barra {
    background-color: var(--preto);
    width: 100%;
    height: 13px;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    & .container-geral,
    & .status-container {
      font-size: 12px !important;
    }

    & .status-container {
      & .moeda-container {
        margin-right: 0px !important;
      }

      & .weather {
        & .clima-container {
          display: none !important;
        }
      }
    }
  }

  @media (max-width: 500px) {
    & .container-geral,
    & .status-container {
      font-size: 11px !important;
    }
  }

  @media (max-width: 480px) {
    & .container-geral,
    & .status-container {
      font-size: 13px !important;
    }

    & .status-container {
      & .moeda-container {
        display: none;
      }

      & .weather {
        & .clima-container {
          display: none !important;
        }
      }
    }
  }

  @media (max-width: 380px) {
    padding: var(--padding-mobile);

    & .container-geral,
    & .status-container {
      font-size: 12px !important;
    }

    & .status-container {
      & .moeda-container {
        display: none;
      }

      & .weather {
        & .clima-container {
          display: none !important;
        }
      }
    }
  }
`;