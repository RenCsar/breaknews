import Card from "../Card";
import MoreNews from "../MoreNews";
import Title from "../Titles";
import { Container } from "./Culture.Styled";
import { useEffect } from "react";
import { RootState, Store } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchAllNews } from "../../store/reducers/allNewsSlice";
import selectNumberPosts from "../selectNumberPosts";
import { TopNewsData } from "../../utils/types";
import { Box, useMediaQuery, useTheme } from "@mui/material"
import { fetchCulturaNews } from "../../store/reducers/culturaSlice";

const Culture = () => {

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    Store.dispatch(fetchCulturaNews({section: "cultura", limit: 8, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.cultura.data);
  const news = selectNumberPosts(Post, 0, 8);

  return (
    <Container>
      <Title title="Cultura" />
      <div className="container-geral">
        {news.map((i: TopNewsData | null, index: number) =>
          <Box key={`${index}`}>
            <Card
              post={i}
              direction={"column"}
              justifycard="center"
              width={xs ? "250px" : "300px"}
              height="300px"
              imgheight="150px"
              imgwidth="100%"
            />
          </Box>
        )}
      </div>
      <MoreNews />
    </Container>
  )
}

export default Culture;