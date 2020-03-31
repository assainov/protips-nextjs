import Link from 'next/link';

import Logo from '../logo';
import { Wrapper, ItemLink, Container, SignInButton, SignUpButton } from './styles';

const navItems = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Pricing',
        href: '/pricing'
    },
    {
        title: 'Contact',
        href: '/contact'
    }
]

const Header = () => (
    <Wrapper>
        <Container>
            <Logo />
            <nav>
                {navItems.map(({title, href}) => (
                    <Link key={href} href={href} passHref>
                        <ItemLink>{title}</ItemLink>
                    </Link>
                ))}
                <Link href='/sign-in' passHref>
                    <SignInButton>Sign in</SignInButton>
                </Link>
                <Link href='/sign-up' passHref>
                    <SignUpButton>Sign up</SignUpButton>
                </Link>
            </nav>
        </Container>
    </Wrapper>
);

export default Header;