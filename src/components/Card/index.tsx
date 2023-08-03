import { Link } from "react-router-dom";
import Category from "../Category";
import Like from "../Like";
import UserPost from "../UserPost";
import { Container } from "./Card.Styled";
import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { TCardProps } from "../../utils/types";

const Card = ({ post, direction, width, height, justifycard, imgheight, imgwidth }: TCardProps) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [size, setSize] = useState<string>("150px");

    useEffect(() => {
        matches ? setSize("250px") : setSize("150px");
    }, [matches]);

    return (
        <Container
            direction={direction}
            width={width}
            height={height}
            justifycard={justifycard}
            imgheight={imgheight}
            imgwidth={imgwidth}
        >
            {post === null ?
                <Box className="link-item-container">
                    <Box className="card">
                        <div className="img-container">
                            <Skeleton animation="wave" variant="rounded" width="100%" height={size} />
                        </div>
                        <div className="content">
                            <div className="category">
                                <Category post={post} />
                            </div>
                            <div className="title">
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                    }}
                                >
                                    <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                                    <Skeleton animation="wave" variant="rounded" width="100%" height={15} />
                                </Box>
                            </div>
                            <div className="status">
                                <Box
                                    sx={{
                                        display: "flex",
                                        width: "100%",
                                        justifyContent: "space-between",
                                        alignItems: "baseline",
                                        gap: "5px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            width: "100%",
                                            alignItems: "baseline",
                                            gap: "5px",
                                        }}
                                    >
                                        <Skeleton animation="wave" variant="rounded" width="30px" height={25} />
                                        <Skeleton animation="wave" variant="rounded" width="100px" height={20} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            width: "100%",
                                            justifyContent: "flex-end",
                                            alignItems: "baseline",
                                            gap: "5px",
                                        }}
                                    >
                                        <Skeleton animation="wave" variant="rounded" width="80px" height={20} />
                                        <Skeleton animation="wave" variant="circular" width="40px" height={40} />
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </Box>
                </Box>
                :
                <Link to={`/noticia`} className="link-item-container">
                    <div className="card">
                        <div className="img-container">
                            <img src={post?.banner} alt="foto--notícia" />
                        </div>
                        <div className="content">
                            <div className="category">
                                <Category post={post} />
                            </div>
                            <div className="title">
                                <h3>
                                    {post?.title}
                                </h3>
                            </div>
                            <div className="status">
                                <div className="status-content">
                                    <Like likes={post?.likes} small={true} />
                                    <UserPost post={post} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </Container>
    )
}

export default Card;