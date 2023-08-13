import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  & .link-container {
    color: var(--preto-fonte);
    display: flex;
    flex-direction: column;

    & .img-container {
      width: 100%;

      & img {
        width: 100%;
        height: 300px;
      }
    }

    & .categoria-container {
      margin: 10px 0px;
    }

    & .title-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    & .status-container {
      display: flex;
      align-items: flex-end;
      flex: 1;

      & .group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & .like,
        & .user-container {
          width: 100%;
        }
      }
    }
  }
`;