import { Container } from "./CardList.Styled";
import { TCardListProps, TopNewsData } from "../../utils/types";
import { Box } from "@mui/material";
import Card from "../../components/Card";

export const CardList = ({ post, imgheight, imgwidth, height }: TCardListProps) => {
    return (
        <Container>
            {
                post?.map((i: TopNewsData | null, index: number) =>
                    <Box key={`${index}`}>
                        <Card post={i} imgheight={imgheight} imgwidth={imgwidth} height={height} />
                    </Box>
                )
            }
        </Container>
    )
}

export default CardList;