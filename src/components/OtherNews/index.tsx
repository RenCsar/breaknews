import { Container } from "./OtherNews.Styled";
import { TAllPostProps, TopNewsData } from "../../utils/types";
import { Box } from "@mui/material";
import Card from "../Card";

const OtherNews = ({ post }: TAllPostProps) => {

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