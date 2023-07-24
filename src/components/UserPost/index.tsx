import { Container } from "./UserPost.Styled";
import { TPostProps } from '../../utils/types';

const UserPost = ({ post }: TPostProps) => {
    return (
        <Container>
            <div className='user-name'>
                <p>{`By ${post.name}`}</p>
                <div className='img-container'>
                    <img src={post.img} alt="imagem do usuário" />
                </div>
            </div>
        </Container>
    )
}

export default UserPost;