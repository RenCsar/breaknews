import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & .link-item-container {
    color: var(--preto-fonte);
    text-decoration: none;

    & .card {
      width: 100%;
      height: 150px;
      display: flex;
      gap: 20px;

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
`;