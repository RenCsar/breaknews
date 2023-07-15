import styled from "styled-components";

export const Container = styled.div`
    padding: var(--padding-geral);
    margin-top: 10px;

    & header {
        display: flex;
        justify-content: space-between;

        & :first-child {
            font-weight: bold;
        }
        
        & .clima-container {
            display: flex;
            gap: 10px;
            
            & .previsao-container {
                display: flex;
                gap: 5px;
                cursor: pointer;

                > p {
                    font-weight: bold;                
                }
            }
            
            & .tempo-container {
                display: flex;
                gap: 5px;

                & :nth-child(2), & :nth-child(3) {
                    font-weight: bold;
                }
            }
        }
    }
`