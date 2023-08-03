import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 20px;

  @media (max-width: 650px) {
    gap: 40px;
  }
`;