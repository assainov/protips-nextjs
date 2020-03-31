import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
    margin: 0 145px;
`;

export const LinkButton = styled.a`
    display: inline-block;
    padding: 15px 30px;
    font-weight: 600;
    font-size: 16px;
    border: 1px solid ${props => props.theme.darkColor};
    border-radius: 4px;
    text-decoration: none;
`;

export const hexa = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha >= 0) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
};