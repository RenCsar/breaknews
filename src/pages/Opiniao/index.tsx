import { Container } from "./Opiniao.styled";
import CardList from "../../components/CardList";
import useSectionData from "../../hooks/useSectionData";

const Opiniao = () => {
    const Post = useSectionData("opinião", 100, 0);

    return (
        <Container>
            <CardList post={Post} imgheight="260px" imgwidth="350px" height="260px" />
        </Container>
    )
}

export default Opiniao;