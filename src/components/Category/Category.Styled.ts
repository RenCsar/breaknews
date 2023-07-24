import styled from "styled-components";

export const Container = styled.div`
  & .tags-container {
    display: flex;
    gap: 5px;
    & .item {
      border: 1px solid var(--border-color);
      border-radius: 50px;
      padding: 1px 10px;
    }
  }
`;