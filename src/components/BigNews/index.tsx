import { Link } from "react-router-dom";
import { TPostProps } from "../../utils/types";
import { Container } from "./BigNews.Styled";
import Category from "../Category";
import Like from "../Like";
import UserPost from "../UserPost";

const BigNews = ({ post }: TPostProps) => {
    return (
        <Container>
            <Link to="/noticia" className="link-container">
                <div className="img-container">
                    <img src={post.banner} alt="foto-notícia" />
                </div>
                <div className="categoria-container">
                    <Category post={post} />
                </div>
                <div className="title-container">
                    <h1>
                        {post.title}
                    </h1>
                    <h4>
                        {post.subtitle}
                    </h4>
                </div>
                <div className="status-container">
                    <div className="group">
                        <div className="like">
                            <Like likes={post.likes} />
                        </div>
                        <div className="user-container">
                            <UserPost post={post} />
                        </div>
                    </div>
                </div>
            </Link>
        </Container>
    )
}

export default BigNews;