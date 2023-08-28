import Card from "../Card";
import MoreNews from "../MoreNews";
import Title from "../Titles";
import { Container } from "./Opinion.Styled";
import { useEffect } from "react";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import selectNumberPosts from "../selectNumberPosts";
import { TopNewsData } from "../../utils/types";
import { Box } from "@mui/material"
import { fetchOpiniaoNews } from "../../store/reducers/opiniaoSlice";

const Opinion = () => {
  useEffect(() => {
    Store.dispatch(fetchOpiniaoNews({ section: "opinião", limit: 4, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.opiniao.data);
  const news = selectNumberPosts(Post, 0, 4);

  return (
    <Container>
      <Title title="Opinião" />
      <div className="container-geral">
        {news.map((i: TopNewsData | null, index: number) =>
          <Box key={`${index}`}>
            <Card
              post={i}
              direction={index % 2 == 0 ? "column" : "column-reverse"}
              justifycard="center"
              width="300px"
              height="500px"
              imgheight="220px"
              imgwidth="100%"
            />
          </Box>
        )}
      </div>
      <MoreNews caminho={"/Opiniao"} />
    </Container>
  )
}

export default Opinion;