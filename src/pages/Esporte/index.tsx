import { Container } from './Esporte.styled';
import CardList from "../../components/CardList";
import useSectionData from '../../hooks/useSectionData';

const Esporte = () => {
  const Post = useSectionData("esporte", 100, 0);

  return (
    <Container>
      <CardList post={Post} imgheight="260px" imgwidth="350px" height="260px" />
    </Container>
  )
}

export default Esporte;