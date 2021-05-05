import styled from "styled-components/macro";

export const Container = styled.div`
    border: 1px solid whitesmoke;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    border-radius: 30px;
    padding: 20px;
    background: #1921229f;
    min-height: 50vh;

    @media(max-width: 1100px) {
        top: 40%;
        width: 80%;
    }

    @media(max-width: 800px) {
        width: 70%;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 3.75rem;

    span {
        font-size: 3rem;

        @media(max-width: 1410px) {
            font-size: 2.75rem;
        }
    }

    @media(max-width: 1410px) {
        font-size: 3rem;
    }

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 850px) {
        font-size: 2.5rem;
    }
`;

export const SubTitle = styled.p`
    display: flex;
    font-size: 2.25rem;
    font-weight: bold;
    color: #ffd369;
    align-items: center;
    margin: 0;

    p {
        margin-right: 10px;
        color: #fff;
    }

    @media(max-width: 1050px) {
        font-size: 1.75rem;
    }
`;

export const Text = styled.p`
    font-size: 1.75rem;

    @media(max-width: 1050px) {
        font-size: 1rem;
    }
`;