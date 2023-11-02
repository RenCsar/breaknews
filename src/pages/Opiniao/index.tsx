import { useEffect } from "react";
import { Container } from "./Opiniao.styled";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchSectionNews } from "../../store/reducers/getSectionNews";
import CardList from "../../components/CardList";

const Opiniao = () => {
    useEffect(() => {
        Store.dispatch(fetchSectionNews({ section: "opinião", limit: 100, offset: 0 }));
    }, []);

    const Post = useSelector((state: RootState) => state.section.data);

    return (
        <Container>
            <CardList post={Post} imgheight="260px" imgwidth="350px" height="260px" />
        </Container>
    )
}

export default Opiniao;