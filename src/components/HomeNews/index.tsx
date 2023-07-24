import { Container } from "./HomeNews.Styled";
import Post from "../../utils/post.json"
import { Link } from "react-router-dom";
import Like from "../Like";

const HomeNews = () => {
  return (
    <Container>
      <div className="container-geral">
        <div className="noticia-maior">
          <Link to="/noticia" className="link-container">
            <div className="img-container">
              <img src={Post.banner} alt="foto-notícia" />
            </div>
            <div className="categoria-container">
              {
                Post.tags.map((i: string) =>
                  <div key={i} className='item'>
                    {i}
                  </div>
                )
              }
            </div>
            <div className="title-container">
              <h1>
                {Post.title}
              </h1>
            </div>
            <div className="status-container">
              <div className="like">
              <Like likes={Post.likes} />
              </div>
              <div className="user-container">

              </div>
            </div>
          </Link>
        </div>
        <div className="outras-noticias">

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