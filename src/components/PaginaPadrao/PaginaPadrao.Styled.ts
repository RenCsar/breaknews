import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;

  & .nav-container {
    position: sticky;
    top: 0px;
    z-index: 99;
    background-color: var(--branco);
  }
`;