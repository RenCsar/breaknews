import { Container } from "./HomeNews.Styled";
import BigNews from "../BigNews";
import OtherNews from "../OtherNews";
import { useEffect } from "react";
import { RootState, Store } from "../../store/store";
import { fetchAllNews } from "../../store/reducers/getAllSlice";
import { useSelector } from "react-redux";
import MoreNews from "../MoreNews";

const HomeNews = () => {

  useEffect(() => {
    Store.dispatch(fetchAllNews({ limit: 4, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.getAll.data);

  return (
    <Container>
      <div className="container-geral">
        <div className="noticia-maior">
          <BigNews post={Post} />
        </div>
        <div className="outras-noticias">
          <OtherNews post={Post} />
        </div>
      </div>
      <MoreNews />
    </Container>
  )
}

export default HomeNews;