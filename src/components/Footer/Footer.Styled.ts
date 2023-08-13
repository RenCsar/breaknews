import styled from "styled-components";
import { TFooterProps } from "../../utils/types";

export const Container = styled.div<TFooterProps>`
  & .container-geral {
    margin-top: ${({ mt }) => (mt ? mt : "0px")};
    background-color: var(--preto);
    width: 100%;
    height: 100%;
    color: var(--branco);

    & .section-a,
    & .section-b {
      align-items: center;
      padding: 20px 50px;
      justify-content: space-between;
      min-height: 80px;
    }

    & .section-a {
      display: flex;
      font-size: 13px;

      & .img-container {
        & img {
          width: 90px;
          height: 70px;
        }
      }

      & .links-container {
        display: flex;

        & p {
          padding: 0 6px;
          cursor: pointer;
        }

        & p + p {
          border-left: 1px solid rgba(256, 256, 256, 0.3);
        }
      }
    }

    & .section-b {
      display: ${({ display }) => (display ? display : "flex")};

      & :nth-child(1) {
        margin: 0 auto;
        & span {
          font-weight: bold;
        }
      }

      & .social-media {
        display: flex;
        gap: 20px;

        & a {
          color: var(--branco);
        }
      }
    }

    & .divisao {
      padding: var(--padding-geral);
      display: ${({ display }) => (display ? display : "block")};

      > hr {
        margin: 0px 0px;
        height: 1px;
        background-color: rgba(256, 256, 256, 0.2);
      }
    }
  }

  @media (max-width: 1030px) {
    & .section-a {
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
  }

  @media (max-width: 490px) {
    & .section-a {
      padding: 0px 20px;

      > :nth-child(2) {
        width: 100%;
        text-align: center;
      }
    }
  }

  @media (max-width: 380px) {
    & .section-a {
      & .links-container {
        flex-direction: column;
        gap: 5px;

        & p + p {
          border-left: none !important;
        }
      }
    }

    & .section-b {
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
  }
`;