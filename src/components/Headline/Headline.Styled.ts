import styled from "styled-components";

const columnCenter = `
display: flex;
flex-direction: column;
align-items: center;
`;

const flexCenter = `
display: flex;
align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-geral);
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;

  & .topnews-container {
    margin-top: 30px;

    & a {
      text-decoration: none;

      & .post-container {
        ${columnCenter}
        justify-content: flex-end;
        width: 100%;
        height: 500px;
        color: var(--branco);

        & .text-container {
          ${columnCenter}
          justify-content: center;
          width: 100%;
          height: 100%;
          margin-top: 80px;
          gap: 10px;

          & h1 {
            font-size: 30px;
          }

          & p {
            font-size: 20px;
          }
        }

        & .user-container {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          width: 100%;
          padding: 20px;

          & .user-name {
            ${flexCenter}
            gap: 10px;
          }

          & .img-container {
            & img {
              width: 40px;
              border-radius: 50px;
            }
          }
        }
      }
    }
  }

  & .status-container {
    ${flexCenter}
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
  }
`;