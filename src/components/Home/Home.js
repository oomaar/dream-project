import Typewriter from 'typewriter-effect';
import {
    Container,
    SubContainer,
    Title,
    SubTitle,
    Text,
} from "./styledHome";

const Home = () => {
    return (
        <Container>
            <SubContainer>
                <Title><span>Hello👋,</span> I'm Omar Hassan</Title>
                <SubTitle>
                    <p>I'm a</p>
                    <Typewriter
                    options={{
                        strings: [
                            'Programmer.',
                            'Designer.',
                            'Front-End Developer.',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </SubTitle>
                <Text>Welcome to my space !</Text>
            </SubContainer>
        </Container>
    );
};

export default Home;
