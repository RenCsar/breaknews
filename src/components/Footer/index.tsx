import { Container } from "./Footer.Styled";
import Banner from "../../assets/banner-branco.png";
import { ImGithub } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';
import { TFooterProps } from "../../utils/types";

const Footer = ({ mt, display }: TFooterProps) => {
    return (
        <Container mt={mt} display={display}>
            <div className="container-geral">
                <div className="section-a">
                    <div className="img-container">
                        <img src={Banner} alt="logo" />
                    </div>
                    <div>
                        <p>
                            © Copyright 2000-2023 Breakews Comunicação e Participações S.A
                        </p>
                    </div>
                    <div className="links-container">
                        <p> princípios editoriais </p>
                        <p> política de privacidade </p>
                        <p> minha conta </p>
                        <p> anuncie conosco </p>
                    </div>
                </div>
                <div className="divisao">
                    <hr />
                </div>
                <div className="section-b">
                    <div>
                        <p>Made by <span>Renan Cesar</span></p>
                    </div>
                    <div className="social-media">
                        <a href="https://github.com/RenCsar" target="_blank">
                            <ImGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/renan-cesar/" target="_blank">
                            <ImLinkedin2 size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;