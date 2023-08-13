import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--branco);
  -webkit-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.25);

  & img {
    width: 175px;
    height: 30px;
  }
`;
