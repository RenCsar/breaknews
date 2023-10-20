import { useEffect } from "react";
import { Container } from "./Opiniao.styled";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchSectionNews } from "../../store/reducers/getSectionNews";

const Opiniao = () => {
    useEffect(() => {
        Store.dispatch(fetchSectionNews({ section: "opinião", limit: 100, offset: 0 }));
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

export default Opiniao;