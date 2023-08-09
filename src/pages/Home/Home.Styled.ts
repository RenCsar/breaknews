import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & .nav-container {
    position: sticky;
    top: 0px;
    z-index: 99;
    background-color: var(--branco);
  }

  & .divisao {
    padding: var(--padding-geral);

    & hr {
      margin: 20px 0px;
      height: 1px;
      background-color: var(--border-color);
      border: none;
    }
  }
`;