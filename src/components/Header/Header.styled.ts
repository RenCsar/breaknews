import styled from "styled-components";

export const Container = styled.div`
    padding: var(--padding-geral);
    margin-top: 10px;

    & header {
        display: flex;
        justify-content: space-between;
        
        & .clima-container {
            display: flex;
            gap: 10px;
            
            & .tempo-container {
                display: flex;
                gap: 5px;
            }
        }
    }
`