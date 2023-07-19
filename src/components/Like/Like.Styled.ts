import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  & .likes {
    display: flex;
    align-items: flex-end;
    gap: 10px;

    & :nth-child(1) {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;