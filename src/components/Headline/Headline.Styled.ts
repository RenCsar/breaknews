import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding-geral);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;

  & .topnews-container {
    margin-top: 30px;

    & a {
      text-decoration: none;

      & .post-container {
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        color: var(--branco);

        & .text-container {
          & h1 {
            font-size: 30px;
          }

          & p {
            font-size: 20px;
          }
        }
      }
    }
  }

  & .status-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding: 0px 10px;

    & .like-container {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      cursor: pointer;
    }

    & .tags-container {
      display: flex;
      gap: 5px;
      & .item {
        border: 1px solid var(--border-color);
        border-radius: 50px;
        padding: 1px 10px;
      }
    }
  }
`;