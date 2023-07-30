import { Link } from "react-router-dom";
import { Container } from "./OtherNews.Styled";
import { TAllPostProps, TopNewsData } from "../../utils/types";
import Category from "../Category";
import Like from "../Like";
import UserPost from "../UserPost";
import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const OtherNews = ({ post }: TAllPostProps) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [size, setSize] = useState<string>("150px");

    useEffect(() => {
        matches ? setSize("250px") : setSize("150px");
    }, [matches]);

    const checkPost = (post: TopNewsData[] | null) => {
        if (post !== null && Array.isArray(post)) {
            const arr = [
                post[1],
                post[2],
                post[3],
            ];
            return arr;
        }

        return [null, null, null];
    };

    const news = checkPost(post);

    return (
        <Container>
            {
                post === null ?
                    news.map((i: TopNewsData | null, index: number) =>
                        <Link to="/noticia" className="link-item-container" key={`${index}`}>
                            <Box className="card">
                                <div className="img-container">
                                    <Skeleton animation="wave" variant="rounded" width="100%" height={size} />
                                </div>
                                <div className="content">
                                    <div className="category">
                                        <Category post={i} />
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
                        </Link>
                    )
                    :
                    news.map((i: TopNewsData | null) =>
                        <Link to="/noticia" className="link-item-container" key={`${i?.id}`}>
                            <div className="card">
                                <div className="img-container">
                                    <img src={i?.banner} alt="foto--notícia" />
                                </div>
                                <div className="content">
                                    <div className="category">
                                        <Category post={i} />
                                    </div>
                                    <div className="title">
                                        <h3>
                                            {i?.title}
                                        </h3>
                                    </div>
                                    <div className="status">
                                        <div className="status-content">
                                            <Like likes={i?.likes} small={true} />
                                            <UserPost post={i} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
            }


        </Container>
    )
}

export default OtherNews;