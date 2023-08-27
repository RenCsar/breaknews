import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { IconSelect } from '../IconSelect';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Gota from "../../assets/climate/weather_raindrops_rain_icon_124168.png";
import Vento from "../../assets/climate/if-weather-9-2682842_90782.svg";
import Nublado from "../../assets/climate/cloudiness.png";

export default function ClimaAccordion({ data }: any) {

    const [hide, setHide] = useState("flex");
    const [list, setList] = useState([]);

    useEffect(() => {
        let arr: any = [];
        for (let i = 0; i < 5; i++) {
            arr.push(data[i]);
        }
        setList(arr);
    }, []);

    const moreDays = () => {
        setHide("none");
        setList(data);
    }

    const sharedStyles = {
        beforeStyles: (color: string) => {
            return {
                width: "150px",
                height: "60px",
                display: "flex",

                '&::before': {
                    width: "8px",
                    height: "100%",
                    display: "block",
                    borderRadius: "5px",
                    background: color,
                    content: '""',
                }
            }
        },
        contentStyles: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            ml: 1,
        },
        flexCenter: {
            display: "flex",
            alignItems: "center",
        },
        statusStyles: {
            display: "flex",
            alignItems: "center",
            gap: "5px",

            "> img": {
                width: "20px"
            }
        }
    }

    return (
        <div>
            <Box
                sx={{
                    mb: "20px",
                }}
            >
                {
                    list.map((i: any) =>
                        <Accordion key={i.date}>
                            <AccordionSummary
                                expandIcon={<ExpandCircleDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Box
                                    sx={{
                                        ...sharedStyles.flexCenter,
                                        gap: "15px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            background: "#ececec",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            ...sharedStyles.flexCenter
                                        }}
                                    >
                                        <Typography fontSize={13} >{i.date.split("/")[0]}</Typography>
                                        <Typography fontSize={13} >{i.weekday}</Typography>
                                    </Box>
                                    <img src={IconSelect(i.condition)} alt="icon-weather" />
                                    <Box>
                                        <Box
                                            sx={sharedStyles.flexCenter}
                                        >
                                            <SouthIcon sx={{ height: "17px", color: "#1bf" }} />
                                            <Typography>{i.min}º</Typography>
                                        </Box>
                                        <Box sx={sharedStyles.flexCenter}
                                        >
                                            <NorthIcon sx={{ height: "17px", color: "red" }} />
                                            <Typography>{i.max}º</Typography>
                                        </Box>
                                    </Box>
                                    <Typography>{i.description}</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "5px",
                                    }}
                                >
                                    <Box
                                        sx={sharedStyles.beforeStyles("var(--vermelho)")}
                                    >
                                        <Box
                                            sx={sharedStyles.contentStyles}
                                        >
                                            <Typography>Temperatura</Typography>
                                            <Box
                                                sx={sharedStyles.flexCenter}
                                            >
                                                <Box
                                                    sx={sharedStyles.flexCenter}
                                                >
                                                    <SouthIcon sx={{ height: "17px", color: "#1bf" }} />
                                                    <Typography>{i.min}º</Typography>
                                                </Box>
                                                <Box
                                                    sx={sharedStyles.flexCenter}
                                                >
                                                    <NorthIcon sx={{ height: "17px", color: "red" }} />
                                                    <Typography>{i.max}º</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={sharedStyles.beforeStyles("#9df")}
                                    >
                                        <Box
                                            sx={sharedStyles.contentStyles}
                                        >
                                            <Typography>Prob. de Chuva</Typography>
                                            <Box
                                                sx={sharedStyles.statusStyles}
                                            >
                                                <img src={Gota} alt="status-icon" />
                                                <Typography>{i.rain_probability}%</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={sharedStyles.beforeStyles("#bbb")}
                                    >
                                        <Box
                                            sx={sharedStyles.contentStyles}
                                        >
                                            <Typography>Nebulosidade</Typography>
                                            <Box
                                                sx={sharedStyles.statusStyles}
                                            >
                                                <img src={Nublado} alt="status-icon" />
                                                <Typography>{i.cloudiness}%</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={sharedStyles.beforeStyles("#cd6")}
                                    >
                                        <Box
                                            sx={sharedStyles.contentStyles}
                                        >
                                            <Typography>Vento</Typography>
                                            <Box
                                                sx={sharedStyles.statusStyles}
                                            >
                                                <img src={Vento} alt="status-icon" />
                                                <Typography>{i.wind_speedy}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    )
                }
            </Box>
            <Box
                sx={{
                    display: hide,
                    justifyContent: "center",
                    width: "100%",
                    margin: "30px 0px",

                }}
            >
                <Button
                    variant='contained'
                    onClick={() => moreDays()}
                >
                    + 5 dias
                </Button>
            </Box>
        </div>
    );
}