import styled from "styled-components";

export const Container = styled.div`
  & .user-name {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .img-container {
    & img {
      width: 40px;
      border-radius: 50px;
    }
  }
`;