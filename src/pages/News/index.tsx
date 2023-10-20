import { useEffect } from "react";
import { Container } from "./News.styled";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchAllNews } from "../../store/reducers/allNewsSlice";

const News = () => {
  useEffect(() => {
    Store.dispatch(fetchAllNews({ limit: 100, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.getAll.data);

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

export default News;