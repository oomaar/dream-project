import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
    Container,
    SubContainer,
    SocialContainer,
    Text,
} from "./styledSocialLinks";

const SocialLinks = () => {
    return (
        <Container>
            <SubContainer>
                <SocialContainer data-text="Github">
                    <GitHubIcon />
                    <Text>Github</Text>
                </SocialContainer>
                <SocialContainer data-text="LinkedIn">
                    <LinkedInIcon />
                    <Text>LinkedIn</Text>
                </SocialContainer>
                <SocialContainer data-text="WhatsApp">
                    <WhatsAppIcon />
                    <Text>WhatsApp</Text>
                </SocialContainer>
                <SocialContainer data-text="Instagram">
                    <InstagramIcon />
                    <Text>Instagram</Text>
                </SocialContainer>
                <SocialContainer data-text="Facebook">
                    <FacebookIcon />
                    <Text>Facebook</Text>
                </SocialContainer>
            </SubContainer>
        </Container>
    );
};

export default SocialLinks;
