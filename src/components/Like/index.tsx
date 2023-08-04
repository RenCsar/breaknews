import { BiLike } from 'react-icons/bi';
import { Tooltip } from '@mui/material';
import { Container } from './Like.Styled';
import { TUserLike, TlikeProps } from '../../utils/types';
import Capitalize from '../Capitalize';

const Like = ({ likes, small }: TlikeProps) => {

    if (!likes) {
        return <div>Carregando curtidas...</div>;
    }

    const userLikes = likes.map((users: TUserLike) => Capitalize(users?.userName, 2));

    const showLikes = (userLikes: string[], small: boolean | undefined) => {
        if (small == true) {
            return `${likes.length} likes`;
        } else if (userLikes.length == 0) {
            return '';
        } else if (userLikes.length == 1) {
            return `${userLikes[0]} curtiu!`;
        } else if (userLikes.length == 2) {
            return `${userLikes[0]} e ${userLikes[1]}`;
        } else if (userLikes.length > 2) {
            return `${userLikes[0]} e outras ${likes.length} pessoas`
        }
    }

    const likeList = showLikes(userLikes, small);

    return (
        <Container>
            <BiLike size={20} />
            <Tooltip title={userLikes.slice(0, 5).join(", ")}>
                <div className="likes">
                    <p>{likeList}</p>
                </div>
            </Tooltip>
        </Container>
    )
}

export default Like;