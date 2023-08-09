import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding-geral);
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  width: 100%;

  > .container-geral {
    margin: 50px 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
  }

  @media (max-width: 1280px) {
    > .container-geral {
      padding: 0px 150px;
      gap: 50px;
    }
  }

  @media (max-width: 1080px) {
    > .container-geral {
      padding: 0px 100px;
    }
  }

  @media (max-width: 920px) {
    > .container-geral {
      padding: 0px 100px;
      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    > .container-geral {
      padding: 0px 0px;
      flex-direction: column;
      align-items: center;
    }
  }
`;