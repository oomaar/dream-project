import {
    Container,
    SubContainer,
    Item,
    Link,
} from "./styledSideBar";

const Sidebar = ({ toggleShow, setToggleShow }) => {
    return (
        <>
            {toggleShow && (
                <Container onClick={() => setToggleShow(false)}>
                    <SubContainer>
                        <Item>
                            <Link>Home</Link>
                        </Item>
                        <Item>
                            <Link>About</Link>
                        </Item>
                        <Item>
                            <Link>Education</Link>
                        </Item>
                        <Item>
                            <Link>Projects</Link>
                        </Item>
                        <Item>
                            <Link>Contact</Link>
                        </Item>
                    </SubContainer>
                </Container>
            )}
        </>
    );
};

export default Sidebar;
