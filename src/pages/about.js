import styled from 'styled-components';

import Layout from '../components/Layout';

const Home = () => (
    <Layout>
        <Title>
            About
        </Title>
    </Layout>
);

export default Home;

const Title = styled.h1`
    color: red;
`;