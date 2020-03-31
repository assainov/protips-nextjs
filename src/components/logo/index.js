import Link from 'next/link';
import styled from 'styled-components';

// import { ItemLink, Wrapper } from './styles';

const Logo = () => (
    <Wrapper>
        <H2>Pro<span>tips</span></H2>
        <Square />
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const H2 = styled.h1`
    font-size: 24px;
    font-weight: 400;
    color: ${props => props.theme.darkColor};
    & span {
        font-weight: 700;
    }
`;

const Square = styled.div`
    height: 10px;
    width: 10px;
    background-color: ${props => props.theme.primaryColor};
    margin-left: 5px;
`;

export default Logo;