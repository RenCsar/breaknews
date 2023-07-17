import { NavLink } from "react-router-dom";
import AccountMenu from "../AccountMenu";
import { Container } from "./Nav.Styled";
import DropDown from "../DropDown";
import { Box } from "@mui/material";
import { useMediaQuery, useTheme } from '@mui/material';

const Nav = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Container>
            <div className="container-geral">
                <div>
                    <Box
                        sx={{
                            display: matches ? "none" : "block",
                        }}
                    >
                        <DropDown />
                    </Box>
                </div>
                <Box
                    component='nav'
                    sx={{
                        display: !matches ? "none" : "block",
                    }}
                >
                    <ul>
                        <NavLink
                            to="/News"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <li>News</li>
                        </NavLink>
                        <NavLink
                            to="/Opiniao"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <li>Opinião</li>
                        </NavLink>
                        <NavLink
                            to="/Cultura"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <li>Cultura</li>
                        </NavLink>
                        <NavLink
                            to="/Esporte"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <li>Esporte</li>
                        </NavLink>
                        <NavLink
                            to="/Financas"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <li>Finanças</li>
                        </NavLink>
                        <NavLink
                            to="/Clima"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <li>Clima</li>
                        </NavLink>
                    </ul>
                </Box>

                <div>
                    <AccountMenu />
                </div>
            </div>
        </Container>
    )
}

export default Nav;