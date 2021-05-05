import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;

    @media (max-width: 1100px) {
        align-items: flex-end;
    } 
`;

export const SubContainer = styled.div`
    background: #192122;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1100px) {
        margin-bottom: 100px;
    } 
`;

export const Text = styled.p`
    /* background: #e94057e1; */
    position: absolute;
    top: 0;
    left: 60px;
    font-family: cursive;
    border-radius: 50px;
    width: 80px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: rgb(236, 236, 236);
    display: none;
`;

export const SocialContainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
        transform: scale(1.3);
    }

    &:hover ${Text} {
        display: flex;
    }
`;