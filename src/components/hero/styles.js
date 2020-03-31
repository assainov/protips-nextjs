import styled from 'styled-components';

import { Container as GlobalContainer, LinkButton, hexa } from '../styles/globals';
import VideoPlayer from '../video-player';

export const HeroButton = styled(LinkButton)`
background-color: ${props => props.theme.primaryColor};
color: ${props => props.theme.lightColor};
border-color: ${props => props.theme.primaryColor};
`;

export const Container = styled(GlobalContainer)`
display: flex;
justify-content: space-between;
`;

export const Section = styled.section`
z-index: 1;
position: relative;
margin-top: -130px;
padding-top: 180px;
padding-bottom: 100px;
background-color: ${hexa('#A339FF', 0.01)};

&:before {
    z-index: -1;
    position: absolute;
    top: -300px;
    right: -350px;
    content: "";
    display: block;
    width: 1160px;
    height: 920px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 50% 50% 34% 66% / 36% 50% 50% 64%;
}
`;

export const Text = styled.div`
padding: 50px;
padding-top: 30px;
padding-left: 0;

& h2 {
    font-size: 44px;
    line-height: 54px;
    font-weight: 400;

    & span {
        font-weight: 700;
    }
}

& p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #544837;
    margin-bottom: 30px;
}
`;

export const Video = styled(VideoPlayer)`
flex-basis: 50%;
flex-grow: 0;
flex-shrink: 0;

width: 579px;
height: 473px;
border-radius: 5px;
background: ${props => props.theme.secondaryColor};
`;