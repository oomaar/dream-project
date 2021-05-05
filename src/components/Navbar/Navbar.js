// import { useState } from "react";
// import { Sidebar } from "..";
// import {
//     Nav,
//     Container,
//     Signature,
//     Span,
//     MyName,
//     Items,
//     Item,
//     div,
//     NavBtn,
// } from "./styledNavbar";

// const Navbar = () => {
//     const [toggleShow, setToggleShow] = useState(false);

//     return (
//         <Nav>
// <Signature>
//     <Span>&lt;</Span>
//     <MyName>Omar Hassan</MyName>
//     <Span>/&gt;</Span>
// </Signature>
//             <NavBtn onClick={() => setToggleShow(state => !state)}>
//                 <i class="fas fa-bars"></i>
//             </NavBtn>
//             <Sidebar toggleShow={toggleShow} setToggleShow={setToggleShow} />
//             <Container>
//                 <Items>
//                     <Item>
//                         <div>Home</div>
//                     </Item>
//                     <Item>
//                         <div>About</div>
//                     </Item>
//                     <Item>
//                         <div>Education</div>
//                     </Item>
//                     <Item>
//                         <div>Projects</div>
//                     </Item>
//                     <Item>
//                         <div>Contact</div>
//                     </Item>
//                 </Items>
//             </Container>
//         </Nav>
//     );
// };

// export default Navbar;

// import { useState } from 'react';

import {
    Nav,
    Menu,
    MenuItem,
    MenuBtn,
    MenuIcon,
    NavIcon,
    Signature,
    Span,
    MyName,
} from "./styledNavbar";

const Navbar = () => {
    // const [nav, setNav] = useState(false);
    // const changeBackground = () => window.scrollY >= 50 ? setNav(true) : setNav(false);
    // window.addEventListener('scroll', changeBackground);
    // <Nav className={nav && "active"}>

    return (
        <Nav>
            <Signature>
                <Span>&lt;</Span>
                <MyName>Omar Hassan</MyName>
                <Span>/&gt;</Span>
            </Signature>
            <MenuBtn id="menu-btn" type="checkbox" />
            <MenuIcon htmlFor="menu-btn" for="menu-btn">
                <NavIcon></NavIcon>
            </MenuIcon>
            <Menu>
                <MenuItem>
                    <a href="#">Home</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">About</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Education</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Projects</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Contact</a>
                </MenuItem>
            </Menu>
        </Nav>
    );
};

export default Navbar;