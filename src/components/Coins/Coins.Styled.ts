import styled from "styled-components";

export const ValueCurrency = styled.div<any>`
  display: flex;
  color: ${(props) =>
    props.valor < 0
      ? "var(--vermelho)"
      : props.valor > 0
      ? "green"
      : "var(--preto)"};
`;