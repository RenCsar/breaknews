import { Link } from "react-router-dom";
import { TPostProps } from "../../utils/types";
import { Container } from "./BigNews.Styled";
import Category from "../Category";
import Like from "../Like";
import UserPost from "../UserPost";
import { Skeleton, Box } from "@mui/material";

const BigNews = ({ post }: TPostProps) => {

    return (
        <Container>
            {
                post === null ?
                    <Box className="link-container">
                        <div className="img-container">
                            <Skeleton animation="wave" variant="rounded" width="100%" height={300} />
                        </div>
                        <div className="categoria-container">
                            <Category post={post} />
                        </div>
                        <div className="title-container">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                }}
                            >
                                <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                                <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                                <Skeleton animation="wave" variant="rounded" width="50%" height={30} />
                            </Box>
                            <Box
                                sx={{
                                    mb: "10px",
                                }}
                            >
                                <Skeleton animation="wave" variant="rounded" width="100%" height={20} />
                            </Box>
                        </div>
                        <div className="status-container">
                            <Box
                                className="group"
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box
                                    className="like"
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
                                    className="user-container"
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
                    </Box>
                    :
                    <Link to="/noticia" className="link-container">
                        <div className="img-container">
                            <img src={post.banner} alt="foto-notícia" />
                        </div>
                        <div className="categoria-container">
                            <Category post={post} />
                        </div>
                        <div className="title-container">
                            <h1>
                                {post.title}
                            </h1>
                            <h4>
                                {post.subtitle}
                            </h4>
                        </div>
                        <div className="status-container">
                            <div className="group">
                                <div className="like">
                                    <Like likes={post.likes} />
                                </div>
                                <div className="user-container">
                                    <UserPost post={post} />
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </Container>
    )
}

export default BigNews;