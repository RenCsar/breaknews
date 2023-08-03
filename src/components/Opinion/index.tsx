import Card from "../Card";
import MoreNews from "../MoreNews";
import Title from "../Titles";
import { Container } from "./Opinion.Styled";
import post from "../../utils/post.json";
import { useEffect } from "react";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchAllNews } from "../../store/reducers/getAllSlice";
import selectNumberPosts from "../selectNumberPosts";

const Opinion = () => {
  useEffect(() => {
    // Store.dispatch(fetchAllNews({ limit: 4, offset: 0 }));
  }, []);

  // const Post = useSelector((state: RootState) => state.getAll.data);


  // const news = selectNumberPosts(post, 0, 4);

  return (
    <Container>
      <Title title="Opinião" />
      <div className="container-geral">
        <Card
          post={post}
          direction="column-reverse"
          justifycard="space-around"
          width="300px"
          // height="500px"
          imgheight="250px"
          imgwidth="100%"
        />
      </div>
      <MoreNews />
    </Container>
  )
}

export default Opinion;