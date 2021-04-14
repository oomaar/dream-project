import { useState } from "react";
import {
    Nav,
    Container,
    Signature,
    Span,
    MyName,
    Items,
    Item,
    Link,
    NavBtn,
    Line,
    ResponsiveNav,
} from "./styledNavbar";

const Navbar = () => {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <Nav>
            <Signature>
                <Span>&lt;</Span>
                <MyName>Omar Hassan</MyName>
                <Span>/&gt;</Span>
            </Signature>
            <NavBtn onClick={() => setToggleShow(state => !state)}>
                <Line></Line>
                <Line></Line>
                {toggleShow && (
                    <ResponsiveNav>
                        <Items className="responsive__list">
                            <Item className="responsive__item">
                                <Link>Home</Link>
                            </Item>
                            <Item className="responsive__item">
                                <Link>About</Link>
                            </Item>
                            <Item className="responsive__item">
                                <Link>Education</Link>
                            </Item>
                            <Item className="responsive__item">
                                <Link>Projects</Link>
                            </Item>
                            <Item className="responsive__item">
                                <Link>Contact</Link>
                            </Item>
                        </Items>
                    </ResponsiveNav>
                )}
            </NavBtn>
            <Container>
                <Items>
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
                </Items>
            </Container>
        </Nav>
    );
};

export default Navbar;
