import styled from "styled-components/macro";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
    background-color: transparent;
    transition: 0.6s ease-in-out;
    border-bottom: 1px solid whitesmoke;

    @media(max-width: 1100px) {
        justify-content: space-between;
        height: 65px;
        padding: 0px 30px;
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media(max-width: 1100px) {
        display: none;
        position: absolute;
        top: 65px;
        left: 0px;
        border-bottom: 2px solid rgba(226, 226, 226, 0.6);
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
`;

export const MenuItem = styled.li`
    @media (max-width: 1100px) {
        width:100%;
    }

    a {
        font-family: 'Roboto';
        height: 40px;
        line-height: 43px;
        margin: 3px;
        padding: 0px 22px;
        display: flex;
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
        letter-spacing: 1px;
        border-radius: 3px;
        transition: 0.2s ease-in-out;
        text-decoration: none;
        cursor: pointer;

        :hover{
            transition: all ease 0.2s;
            transform: scale(1.3);
        }

        @media(max-width: 1100px) {
            width: 100%;
            height: 40px;
            justify-content: center;
            align-items: center;
            margin: 0px;
            padding: 25px;
            border: 1px solid rgba(38, 38, 38, 0.03);
        }
    }
`;

export const MenuIcon = styled.label`
    display: none;

    @media(max-width: 1100px) {
        display: block;
        cursor: pointer;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }
`;

export const NavIcon = styled.span`
    @media(max-width: 1100px) {
        background-color: #fff;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 24px;

        ::before,
        ::after {
            background: rgb(255, 255, 255);
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all ease-out 0.2s;
            width: 100%;
        }

        ::before {
            top: 6px;
        }

        ::after {
            top: -6px;
        }
    }
`;

export const MenuBtn = styled.input`
    display: none;

    @media(max-width: 1100px) {
        display: none;
        :checked ~ ${Menu} {
            display: block;
        }
        :checked ~ ${MenuIcon} ${NavIcon} {
            background: transparent;
        }
        :checked ~ ${MenuIcon} ${NavIcon}::before {
            transform: rotate(-45deg);
            background-color: #FF1414;
            top: 0;
        }
        :checked ~ ${MenuIcon} ${NavIcon}::after {
            transform: rotate(45deg);
            background-color: #FF1414;
            top: 0;
        }
    }
`;

export const Signature = styled.div`
    display: flex;
    align-items: center;
`;

export const Span = styled.span`
    font-size: 2.3rem;
    color: whitesmoke;
    margin: 0;

    @media(max-width: 500px) {
        font-size: 1.3rem;
    }

    @media(max-width: 350px) {
        font-size: 0.9rem;
    }
`;

export const MyName = styled.h1`
    font-size: 2.3rem;
    font-family: "Agustina Regular";
    font-weight: bold;
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-variant-ligatures: no-common-ligatures;
    color: whitesmoke;
    padding: 0 20px;
    margin: 0;

    @media(max-width: 500px) {
        font-size: 1.3rem;
    }

    @media(max-width: 350px) {
        font-size: 0.9rem;
    }
`;