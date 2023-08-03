import { Container } from "./OtherNews.Styled";
import { TAllPostProps, TopNewsData } from "../../utils/types";
import { Box } from "@mui/material";
import Card from "../Card";
import selectNumberPosts from "../selectNumberPosts";

const OtherNews = ({ post }: TAllPostProps) => {

    const news = selectNumberPosts(post, 1, 3);

    return (
        <Container>
            {
                news.map((i: TopNewsData | null, index: number) =>
                    <Box key={`${index}`}>
                        <Card post={i} />
                    </Box>
                )
            }
        </Container>
    )
}

export default OtherNews;