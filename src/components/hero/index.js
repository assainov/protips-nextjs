import Link from 'next/link';

import { Section, Container, Text, HeroButton, Video } from './styles';

const Hero = () => (
    <Section>
        <Container>
            <Text>
                <h2>A Guide To <span>Rocky</span> Mountain Vacations</h2>
                <p>Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure. If you have never been on a helicopter before, this is a great place to do it.</p>
                <Link href='/get-started' passHref>
                    <HeroButton>Get started</HeroButton>
                </Link>
            </Text>
            <Video />
        </Container>
    </Section>
);

export default Hero;