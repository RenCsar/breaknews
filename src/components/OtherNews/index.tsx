import { Link } from "react-router-dom";
import { Container } from "./OtherNews.Styled";
import { TPostProps } from "../../utils/types";
import Category from "../Category";
import Like from "../Like";
import UserPost from "../UserPost";

const OtherNews = ({ post }: TPostProps) => {

    const arr = [
        post,
        post,
        post,
    ];

    return (
        <Container>
            {arr.map((i: any) =>
                <Link to="/noticia" className="link-item-container" key={`${i.id}`}>
                    <div className="card">
                        <div className="img-container">
                            <img src={i.banner} alt="foto--notícia" />
                        </div>
                        <div className="content">
                            <div className="category">
                                <Category post={i} />
                            </div>
                            <div className="title">
                                <h3>
                                    {i.title}
                                </h3>
                            </div>
                            <div className="status">
                                <div className="status-content">
                                    <Like likes={i.likes} small={true} />
                                    <UserPost post={i} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </Container>
    )
}

export default OtherNews;