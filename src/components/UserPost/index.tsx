import { Container } from "./UserPost.Styled";

const UserPost = ({ post }: any) => {
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