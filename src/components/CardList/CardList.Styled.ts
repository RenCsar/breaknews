import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0px;
  padding: var(--padding-geral);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1100px;

  & .card {
    box-shadow: 1px 3px 30px -4px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    align-items: center;

    & .img-container img {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    & .content {
      padding: 0px 10px;
    }
  }
`;