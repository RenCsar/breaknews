import { TPostProps } from '../../utils/types'
import { Container } from './Category.Styled'

const Category = ({ post }: TPostProps) => {
    return (
        <Container>
            <div className='tags-container'>
                {
                    post.category?.map((i: string) =>
                        <div key={i} className='item'>
                            {i}
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default Category;