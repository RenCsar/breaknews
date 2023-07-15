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
`;