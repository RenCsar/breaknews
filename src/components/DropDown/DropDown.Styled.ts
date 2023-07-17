import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkCustom = styled(NavLink)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: var(--preto-fonte);

  & a.pending,
  & a {
    text-decoration: none;
    color: var(--preto-fonte);
  }

  & .active {
    font-weight: bold;
    border-bottom: 2px solid var(--preto);
  }
`;