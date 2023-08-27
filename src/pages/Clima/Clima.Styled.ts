import styled from "styled-components";

const borderStyle = `
1px solid rgba(0, 0, 0, 0.1);
`;

const flexColumn = `
display: flex;
flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0px;

  > .container-geral {
    ${flexColumn}
    align-items: center;
    width: 100%;
    padding: var(--padding-geral);
    margin: 20px 0px;

    > .container {
      ${flexColumn}
      width: 700px;
      gap: 20px;

      > .title-container {
        ${flexColumn}
        justify-content: center;
        gap: 10px;
      }

      > .clima-icons-geral {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;

        > .clima-icons {
          > img {
            width: 100px;
          }
        }

        > .min-max {
          display: flex;
          gap: 30px;
          > .clima-temp {
            display: flex;
            align-items: center;
            > .text-container {
              display: flex;
              align-items: baseline;
              gap: 10px;
              font-size: 30px;

              > p:nth-child(2) {
                font-size: 40px;
              }
            }
            > img {
              width: 58px;
            }
          }
        }
      }

      > .data-table {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 20px 0px;

        > .colunas + .colunas {
          border-left: ${borderStyle};
        }

        > .colunas {
          display: flex;
          width: 100%;
          flex-direction: column;

          > .status-container + .status-container {
            border-top: ${borderStyle};
          }

          > .status-container {
            display: flex;
            width: 100%;
            height: 60px;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px;

            > .group-container {
              display: flex;
              align-items: center;
              gap: 10px;

              > .img-container {
                > img {
                  height: 30px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    > .container-geral {
      > .container {
        width: 550px;
      }
    }
  }

  @media (max-width: 600px) {
    > .container-geral {
      > .container {
        width: 100%;

        > .title-container {
          align-items: center;
        }

        > .clima-icons-geral {
          flex-direction: column;
          gap: 10px;
        }

        > .data-table {
          flex-direction: column;

          > .colunas + .colunas {
            border-left: none;
            border-top: ${borderStyle};
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    > .container-geral {
      > .container {
        > .title-container {
          text-align: center;
        }

        > .clima-icons-geral {
          > .min-max {
            gap: 20px;
            width: 100%;
            justify-content: center;
            > .clima-temp {
              align-items: center;
              > .text-container {
                font-size: 20px;
                > p:nth-child(2) {
                  font-size: 28px;
                }
              }
              > img {
                width: 45px;
              }
            }
          }
        }
      }
    }
  }
`;