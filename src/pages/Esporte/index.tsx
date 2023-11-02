import { useEffect } from 'react';
import { Container } from './Esporte.styled';
import { RootState, Store } from '../../store/store';
import { fetchSectionNews } from '../../store/reducers/getSectionNews';
import { useSelector } from 'react-redux';
import CardList from "../../components/CardList";

const Esporte = () => {
  useEffect(() => {
    Store.dispatch(fetchSectionNews({ section: "esporte", limit: 100, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.section.data);

  return (
    <Container>
      <CardList post={Post} imgheight="260px" imgwidth="350px" height="260px" />
    </Container>
  )
}

export default Esporte;