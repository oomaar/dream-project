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
            <NavBtn>
                <i class="fas fa-bars"></i>
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
