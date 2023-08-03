import styled from "styled-components";
import { TCardStyledProps } from "../../utils/types";

export const Container = styled.div<TCardStyledProps>`
  & .link-item-container {
    color: var(--preto-fonte);
    text-decoration: none;

    & .card {
      width: 100%;
      min-height: 150px;
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-direction: ${({direction})=> direction == "column"? "column" : "row"};

      & .img-container,
      & img {
        height: 150px;
        width: 250px;
      }

      & .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

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