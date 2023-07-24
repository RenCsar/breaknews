import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  /* width: 300px; */

  & .user-name {
    display: flex;
    align-items: center;
    gap: 10px;

    & .img-container {
      width: 40px !important;
      height: 40px !important;

      & img {
        width: 40px !important;
        height: 40px !important;
        border-radius: 50px;
      }
    }
  }
`;