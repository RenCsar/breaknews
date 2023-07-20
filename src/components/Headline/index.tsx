import { Container } from './Headline.Styled';
import post from '../../utils/post.json';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Like from '../Like';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopNews } from '../../store/reducers/topNewsSlice';
import { Store, RootState } from '../../store/store';

const Headline = () => {

    useEffect(() => {
        Store.dispatch(fetchTopNews());
    }, []);

    const topNews = useSelector((state: RootState) => state.topNews.data);

    if (!topNews) {
        return <div>Carregando Postagem...</div>;
    }

    return (
        <Container>
            <div className='headline-container'>
                <h1>Headline news</h1>
            </div>
            <div className='topnews-container'>
                <Link to='/post'>
                    <Box
                        className='post-container'
                        sx={{
                            background: `linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)), url(${post.banner})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className='text-container'>
                            <h1>{topNews.title}</h1>
                            <p>{post.subtitle}</p>
                        </div>
                    </Box>
                </Link>
            </div>
            <div className='status-container'>
                <div className='like-container'>
                    <Like likes={topNews.likes} />
                </div>
                <div className='tags-container'>
                    {
                        post.tags.map((i: string) =>
                            <div key={i} className='item'>
                                {i}
                            </div>
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default Headline;