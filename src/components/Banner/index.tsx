import { Container } from "./Banner.Styled";
import BannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <Container>
            <div className="img-container">
                <img src={BannerImg} alt="Banner" />
            </div>
        </Container>
    )
}

export default Banner;