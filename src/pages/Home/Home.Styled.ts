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
`;