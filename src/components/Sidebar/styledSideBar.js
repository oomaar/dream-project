import styled from "styled-components/macro";

export const Container = styled.div`
    background: rgba(226, 226, 226, 0.5);
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    transition: 0.5s ease-in-out;

    @media (min-width: 1000px) {
        display: none;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    background: #000;
`;

export const Item = styled.div`
    margin: 30px auto;
    padding: 10px;
    transition: 0.2s ease-in-out;

    &:hover {
        opacity: 0.5;
    }
`;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: bold;
`;