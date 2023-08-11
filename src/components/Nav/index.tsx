import { NavLink } from "react-router-dom";
import AccountMenu from "../AccountMenu";
import { Container } from "./Nav.Styled";
import DropDown from "../DropDown";
import { Box, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from '@mui/material';
import { TSectionNav } from "../../utils/types";
import { useState } from "react";

const Nav = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const [user, setUser] = useState(localStorage.getItem("user"));

    const sections = [
        { name: "News", link: "/News" },
        { name: "Opinião", link: "/Opiniao" },
        { name: "Cultura", link: "/Cultura" },
        { name: "Esporte", link: "/Esporte" },
        { name: "Finanças", link: "Finanças" },
        { name: "Clima", link: "/Clima" },
    ];

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
                        {
                            sections.map((i: TSectionNav, index: number) =>
                                <NavLink
                                    key={index}
                                    to={i.link}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    <li>{i.name}</li>
                                </NavLink>
                            )
                        }
                    </ul>
                </Box>
                <div>
                    {
                        !user ?
                            <Typography
                                onClick={() => localStorage.setItem("user", "Renan")}
                                sx={{
                                    color: "var(--vermelho)",
                                    fontWeight: "500",
                                    cursor: "pointer"
                                }}
                            >
                                Log in
                            </Typography>
                            :
                            <AccountMenu />
                    }
                </div>
            </div>
        </Container>
    )
}

export default Nav;