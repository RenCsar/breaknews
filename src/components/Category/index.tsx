import { Skeleton } from '@mui/material';
import { TPostProps } from '../../utils/types'
import { Container } from './Category.Styled'

const Category = ({ post }: TPostProps) => {
    return (
        <Container>
            {
                post === null ?
                    <div className='tags-container'>
                        <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                        <Skeleton animation="wave" variant="rounded" width="60px" height={20} />
                    </div>
                    :
                    <div className='tags-container'>
                        {
                            post.category?.map((i: string) =>
                                <div key={i} className='item'>
                                    {i}
                                </div>
                            )
                        }
                    </div>
            }
        </Container>
    )
}

export default Category;