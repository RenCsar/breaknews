import { useEffect } from "react";
import { Container } from "./Cultura.styled";
import { RootState, Store } from "../../store/store";
import { fetchSectionNews } from "../../store/reducers/getSectionNews";
import { useSelector } from "react-redux";

const Cultura = () => {
    useEffect(() => {
        Store.dispatch(fetchSectionNews({ section: "cultura", limit: 100, offset: 0 }));
    }, []);

    const Post = useSelector((state: RootState) => state.section.data);

    return (
        <Container>
            {
                Post?.map((i: any) =>
                    <p key={i.id}>{i.category[0]}</p>
                )
            }
        </Container>
    )
}

export default Cultura;