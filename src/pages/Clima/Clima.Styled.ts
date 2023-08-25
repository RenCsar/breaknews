import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  > .container-geral {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: var(--padding-geral);
    margin: 20px 0px;

    > .container {
      display: flex;
      width: 700px;
      flex-direction: column;
      gap: 20px;

      > .title-container {
        display: flex;
        flex-direction: column;
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
          > .clima-temp {
            display: flex;
            align-items: center;
            > .text-container {
              display: flex;
              align-items: baseline;
              gap: 10px;

                font-size: 30px;
              > p:nth-child(1) {
              }
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
    }
  }
`;
