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