import styled from "styled-components";
import { TCoinStyledProps } from "../../utils/types";

export const ValueCurrency = styled.div<TCoinStyledProps>`
  display: flex;
  color: ${(props) =>
    props.valor < 0
      ? "var(--vermelho)"
      : props.valor > 0
      ? "green"
      : "var(--preto)"};
`;