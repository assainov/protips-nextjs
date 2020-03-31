import styled from 'styled-components';

import { Container } from '../styles/globals';
import Atlas from '../../icons/atlas.svg';
import Biohazard from '../../icons/biohazard.svg';
import Handshake from '../../icons/handshake.svg';
import Astronaut from '../../icons/user-astronaut.svg';

const benefitList = [
    {
        title: 'First click tests',
        description: 'While most people enjoy casino gambling',
        icon: <Atlas />
    },
    {
        title: 'Design surveys',
        description: 'Sports betting, lottery and bingo playing for the fun',
        icon: <Biohazard />
    },
    {
        title: 'Preference tests',
        description: 'The Myspace page defines the individual.',
        icon: <Handshake />
    },
    {
        title: 'User astronaut',
        description: 'Personal choices and the overall personality of the person. ',
        icon: <Astronaut />
    },
]

const Benefits = () => (
    <Section>
        <Container>
            <List>
                {benefitList.map(benefit => (
                    <Benefit key={benefit.title} {...benefit} />
                ))}
            </List>
        </Container>
    </Section>
)

const Benefit = ({title, description, icon}) => (
    <Wrapper>
        <IconWrapper>
            {icon}
        </IconWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Wrapper>
)

export const Section = styled.section`
    padding: 100px 0;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
`;

export const Wrapper = styled.li`
    flex-basis: 25%;
    flex-grow: 0;
    flex-shrink: 0;
    padding-right: 30px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 80px;
    height: 80px;
    padding: 20px;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    path {
        transition: all 0.3s ease-in-out;
        fill: ${props => props.theme.primaryColor};
    }

    &:hover {
        background-color: ${props => props.theme.primaryColor};
    }
    &:hover path {
        fill: ${props => props.theme.lightColor};
    }
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 15px;
`;

export const Description = styled.p`
    color: #5C5040;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
`;

export default Benefits;