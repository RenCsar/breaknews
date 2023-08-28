import { Link } from 'react-router-dom';
import { Container } from './MoreNews.Styled';

type TMoreNewsProps = {
    caminho: string,
}

const MoreNews = ({ caminho }: TMoreNewsProps) => {
    return (
        <Container>
            <div className="mais-noticiais">
                <Link to={caminho}>
                    <p>
                        Mais notíciais
                    </p>
                </Link>
            </div>
        </Container>
    )
}

export default MoreNews;