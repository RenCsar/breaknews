import styled from "styled-components";

const comum = `
display: flex;
width: 100%;
height: 100%;
`

export const Container = styled.div`
  padding: var(--padding-geral);
  height: 600px;
  display: flex;
  flex-direction: column;
  
  & .container-geral {
    ${comum}
    margin-bottom: 10px;
    
    & .noticia-maior {
        ${comum}
        padding: 30px;
    }
    
    & .outras-noticias {
        padding: 30px;
        ${comum}        
    }
}

  & .mais-noticiais {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;

    & p {
        border: 1px solid var(--border-color);
        font-weight: bold;
        border-radius: 50px;        
        padding: 1px 10px;
    }
}
`;