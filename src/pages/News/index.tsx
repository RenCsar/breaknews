import { useEffect } from "react";
import { Container } from "./News.styled";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchAllNews } from "../../store/reducers/allNewsSlice";
import CardList from "../../components/CardList";

const News = () => {
  useEffect(() => {
    Store.dispatch(fetchAllNews({ limit: 100, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.getAll.data);

  return (
    <Container>
      <CardList post={Post} imgheight="260px" imgwidth="350px" height="260px" />
    </Container>
  )
}

export default News;