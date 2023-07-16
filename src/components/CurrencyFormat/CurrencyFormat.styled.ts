import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;

  & .mySwiper {
    width: 120px;
    height: 20px;
    & .item {
      display: flex;
      gap: 10px;
    }
  }

  @media (max-width: 500px) {
    & .mySwiper {
      width: 100px;
      & .item {
        gap: 5px;
      }
    }
  }
`;