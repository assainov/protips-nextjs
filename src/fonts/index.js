import { createGlobalStyle } from 'styled-components';

// import Regular from './Poppins-Regular.ttf';
// import Medium from './Poppins-Medium.ttf';
// import Bold from './Poppins-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url('/src/fonts/Poppins-Regular.ttf')  format('truetype'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url('/src/fonts/Poppins-Medium.ttf')  format('truetype'),
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url('/src/fonts/Poppins-SemiBold.ttf')  format('truetype'),
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url('/src/fonts/Poppins-Bold.ttf')  format('truetype'),
        font-weight: 700;
        font-style: normal;
    }
    body {
        font-family: 'Poppins';
    }
`;