import styled from 'styled-components';
import { Container as GlobalContainer, LinkButton } from '../styles/globals';


export const Wrapper = styled.header`
    z-index: 2;
    position: relative;
    height: 130px;
`;

export const ItemLink = styled.a`
    margin-right: 30px;
    color: ${props => props.theme.lightColor};
    text-decoration: none;
    transition: opacity 0.3s ease-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const Container = styled(GlobalContainer)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SignInButton = styled(LinkButton)`
    background-color: transparent;
    border-color: ${props => props.theme.lightColor};
    color: ${props => props.theme.lightColor};
    margin-right: 20px;
    margin-left: 20px;
    transition: opacity 0.3s ease-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const SignUpButton = styled(LinkButton)`
    background-color: ${props => props.theme.darkColor};
    border-color: ${props => props.theme.darkColor};
    color: ${props => props.theme.lightColor};
    transition: opacity 0.3s ease-out;

    &:hover {
        opacity: 0.8;
    }
`;