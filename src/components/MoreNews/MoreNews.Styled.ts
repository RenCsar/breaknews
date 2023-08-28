import styled from "styled-components";

export const Container = styled.div`
  & .mais-noticiais {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;

    & a {
      color: var(--preto-fonte);

      & p {
        border: 1px solid var(--border-color);
        font-weight: bold;
        border-radius: 50px;
        padding: 1px 10px;
      }
    }
  }
`;