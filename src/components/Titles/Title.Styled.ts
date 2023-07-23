import styled from "styled-components";

export const Container = styled.div`
  & .headline-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    font-size: 22px;
    border-bottom: 1px solid var(--border-color);
  }
`;