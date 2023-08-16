import styled from "styled-components";

const flex = `
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
  ${flex}
  width: 100%;
  flex-direction: column;
  align-items: center;

  & .login,
  & .signup {
    > :nth-child(1) {
      ${flex}
    }

    & .form {
      display: flex;
      flex-direction: column;
      width: 450px;

      & .submit,
      & .btn-container button {
        width: 100%;
        height: 40px;
        cursor: pointer;
        border-radius: 4px;
        border: none;
      }

      > .submit {
        background-color: var(--preto);
        color: var(--branco);
        font-size: 16px;
        transition: 1s;

        &:hover {
          background-color: var(--preto-fonte);
        }

        &:active {
          transform: scale(0.99);
          background-color: rgb(80, 80, 80);
        }
      }

      & .divisao {
        ${flex}
        width: 100%;
        gap: 8px;
        color: var(--gray);
        margin-top: 20px;
        font-size: 14px;

        & p:first-child,
        & p:last-child {
          width: 228px;
          border-bottom: 1px solid rgb(220, 220, 220);
          margin-bottom: 8px;
        }
      }

      & .termos {
        ${flex}
        text-align: center;
        font-size: 14px;
        line-height: 22px;

        & span {
          cursor: pointer;
        }
      }

      & .btn-container {
        ${flex}
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        > button {
          ${flex}
          align-items: center;
          gap: 10px;
          background-color: var(--branco);
          -webkit-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.25);

          & p {
            font-weight: bold;
          }
        }
      }
      & .signin-container {
        ${flex}

        & span {
          color: blue;
          cursor: pointer;
        }
      }
    }
  }

  & .signup {
    margin: 20px 0px;
  }

  & .signin-container {
    margin-bottom: 20px;
    & span {
      color: blue;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    & .login,
    & .signup {
      & .form {
        width: 350px;
      }
    }
  }

  @media (max-width: 400px) {
    & .login,
    & .signup {
      & .form {
        width: 300px;
      }
    }
  }

  @media (max-width: 350px) {
    & .login,
    & .signup {
      & .form {
        width: 250px;
      }
    }
  }
`;