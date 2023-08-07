import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding-geral);
  display: flex;
  flex-direction: column;
  width: 100%;

  > .container-geral {
    margin: 15px 0px;
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
    }
  }

  @media (max-width: 1080px) {
    > .container-geral {
      padding: 0px 100px;
    }
  }

  @media (max-width: 880px) {
    > .container-geral {
      padding: 0px 100px;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    > .container-geral {
      padding: 0px 0px;
      justify-content: center;
    }
  }
`;