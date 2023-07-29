import { Container } from "./HomeNews.Styled";
import Post from "../../utils/post.json";
import BigNews from "../BigNews";
import OtherNews from "../OtherNews";

const HomeNews = () => {

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
      <div className="mais-noticiais">
        <p>
          Mais notíciais
        </p>
      </div>
    </Container>
  )
}

export default HomeNews;