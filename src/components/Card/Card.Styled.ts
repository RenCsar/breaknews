import styled from "styled-components";
import { TCardStyledProps } from "../../utils/types";

export const Container = styled.div<TCardStyledProps>`
  & .link-item-container {
    color: var(--preto-fonte);

    & .card {
      width: ${({ width }) => (width ? width : "100%")};
      height: ${({ height }) => (height ? height : "")};
      flex-direction: ${({ direction }) => (direction ? direction : "row")};
      justify-content: ${({ justifycard }) =>
        justifycard ? justifycard : "center"};
      min-height: 150px;
      display: flex;
      gap: 20px;

      > .img-container,
      & img {
        height: ${({ imgheight }) => (imgheight ? imgheight : "150px")};
        width: ${({ imgwidth }) => (imgwidth ? imgwidth : "250px")};
      }

      > .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        & .title {
          height: 50px;
        }

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
      flex-direction: column !important;
      align-items: center;

      > .img-container,
      & img {
        height: ${({ direction, imgheight }) =>
          direction == "column" ? imgheight : "250px !important"};
        width: 100% !important;
      }

      > .content {
        width: 100%;
      }
    }
  }
`;