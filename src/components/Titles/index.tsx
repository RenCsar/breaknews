import { Container } from "./Title.Styled";

type TTitleProps = {
    title: string
}

const Title = ({title}: TTitleProps) => {
    return (
        <Container>
            <div className='headline-container'>
                <h1>{title}</h1>
            </div>
        </Container>
    )
}

export default Title;