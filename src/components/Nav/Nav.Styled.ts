import styled from "styled-components";

const borderStyle = `
    1px solid rgba(0, 0, 0, 0.5)
`;

export const Container = styled.div`
  padding: var(--padding-geral);

  & .container-geral {
    border-top: ${borderStyle};
    border-bottom: ${borderStyle};
    height: 40px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo-container {
      width: 100%;
    }

    & nav {
      width: 60%;
      & ul {
        display: flex;
        justify-content: space-around;

        & a.pending, & a {
          text-decoration: none;
          color: var(--preto-fonte);
        }
        
        & .active {
          font-weight: bold;
          border-bottom: 2px solid var(--preto);
        }

        & li {
          list-style: none;
        }
      }
    }
  }
`;