import { useEffect } from 'react';
import { Container } from './Esporte.styled';
import { RootState, Store } from '../../store/store';
import { fetchSectionNews } from '../../store/reducers/getSectionNews';
import { useSelector } from 'react-redux';

const Esporte = () => {
  useEffect(() => {
    Store.dispatch(fetchSectionNews({ section: "esporte", limit: 100, offset: 0 }));
  }, []);

  const Post = useSelector((state: RootState) => state.section.data);

  return (
    <Container>
      {
        Post?.map((i: any) =>
          <p key={i.id}>{i.category[0]}</p>
        )
      }
    </Container>
  )
}

export default Esporte;