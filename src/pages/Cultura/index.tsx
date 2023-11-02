import { useEffect } from "react";
import { Container } from "./Cultura.styled";
import { RootState, Store } from "../../store/store";
import { fetchSectionNews } from "../../store/reducers/getSectionNews";
import { useSelector } from "react-redux";
import CardList from "../../components/CardList";

const Cultura = () => {
    useEffect(() => {
        Store.dispatch(fetchSectionNews({ section: "cultura", limit: 100, offset: 0 }));
    }, []);

    const Post = useSelector((state: RootState) => state.section.data);

    return (
        <Container>
            <CardList post={Post} imgheight="260px" imgwidth="350px" height="260px" />
        </Container>
    )
}

export default Cultura;