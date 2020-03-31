import { ThemeProvider } from 'styled-components';

import Header from './header';
import GlobalFonts from '../fonts';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Header />
        {children}
        <GlobalStyles />
        <GlobalFonts />
    </ThemeProvider>
);

export default Layout;