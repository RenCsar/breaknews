import { Container } from './Headline.Styled';
import post from '../../utils/post.json';
import { Box, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import Like from '../Like';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopNews } from '../../store/reducers/topNewsSlice';
import { Store, RootState } from '../../store/store';
import Title from '../Titles';
import Category from '../Category';

const Headline = () => {

    useEffect(() => {
        Store.dispatch(fetchTopNews());
    }, []);

    const topNews = useSelector((state: RootState) => state.topNews.data);

    return (
        <Container>
            <Title title={"Headline News"} />
            {topNews === null ?
                <div>
                    <Box
                        sx={{
                            mt: "30px"
                        }}
                    >
                        <Skeleton animation="wave" variant="rounded" width="100%" height={500} />
                    </Box>
                    <div>
                        <Box
                            sx={{
                                mt: "10px",
                                p: "0px 10px",
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "10px",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    gap: "10px",
                                }}
                            >
                                <Skeleton animation="wave" variant="rounded" width="20px" height={20} />
                                <Skeleton animation="wave" variant="rounded" width="150px" height={15} />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    gap: "10px",
                                }}
                            >
                                <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                                <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                                <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                            </Box>
                        </Box>
                    </div>
                </div>
                :
                <div>
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
                                    <p>{topNews.subtitle}</p>
                                </div>
                                <div className='user-container'>
                                    <div className='user-name'>
                                        <p>{`By ${topNews.name}`}</p>
                                        <div className='img-container'>
                                            <img src={topNews.img} alt="imagem do usuário" />
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Link>
                    </div>
                    <div className='status-container'>
                        <div className='like-container'>
                            <Like likes={topNews.likes} />
                        </div>
                        <div>
                            <Category post={topNews} />
                        </div>
                    </div>
                </div>
            }
        </Container>
    );
}

export default Headline;