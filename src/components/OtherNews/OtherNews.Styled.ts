import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 20px;

  & .link-item-container {
    color: var(--preto-fonte);
    text-decoration: none;

    & .card {
      width: 100%;
      min-height: 150px;
      display: flex;
      gap: 20px;
      justify-content: center;

      & .img-container,
      & img {
        height: 150px;
        width: 250px;
      }

      & .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        & .status {
          display: flex;
          align-items: flex-end;
          flex: 1;

          & .status-content {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    gap: 40px;
    & .card {
      flex-direction: column;
      align-items: center;

      > .img-container,
      & img {
        height: 250px !important;
        width: 100% !important;
      }

      > .content {
        width: 100%;
      }
    }
  }
`;