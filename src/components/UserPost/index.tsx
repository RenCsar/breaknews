import { Container } from "./UserPost.Styled";
import { TPostProps } from '../../utils/types';
import { Skeleton } from "@mui/material";

const UserPost = ({ post }: TPostProps) => {
    return (
        <Container>
            {post === null ?
                <div className='user-name'>
                    <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                    <div className='img-container'>
                        <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                    </div>
                </div>
                :
                <div className='user-name'>
                    <p>{`By ${post.name}`}</p>
                    <div className='img-container'>
                        <img src={post.img} alt="imagem do usuário" />
                    </div>
                </div>
            }

        </Container>
    )
}

export default UserPost;