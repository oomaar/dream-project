import styled from 'styled-components/macro';

export const Nav = styled.nav`
    border-bottom: 1px solid whitesmoke;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
`;

export const Signature = styled.div`
    display: flex;
    align-items: center;
`;

export const Span = styled.span`
    font-size: 2.3rem;
    color: whitesmoke;
    margin: 0;
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
`;

export const Container = styled.div`
    max-width: 500px;
    width: 100%;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Items = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;

    &.responsive__list {
        flex-direction: column;
        padding: 0;
    }
`;

export const Item = styled.li`
    list-style-type: none;

    &.responsive__item {
        border-bottom: 1px solid whitesmoke;
        padding: 10px;

        &:last-child {
            border: 0;
        }
    }
`;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #fff;
`;

export const NavBtn = styled.div`
    display: none;
    height: 45px;
    width: 45px;
    /* background: #79a211; */
    background: #fff;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    position: relative;

    @media (max-width: 1000px) {
        display: flex;
    }
`;

export const Line = styled.div`
    height: 5px;
    width: 25px;
    /* background: #fff; */
    background: #000;
    border-radius: 20px;
`;

export const ResponsiveNav = styled.div`
    display: flex;
    position: absolute;
    top: 47px;
    right: 47px;
    background: #333;
    padding: 10px;

    @media (min-width: 1000px) {
        display: none;
    }
`;