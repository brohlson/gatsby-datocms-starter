import { theme } from '@chakra-ui/core';

export default {
  ...theme,
  breakpoints: ['40em', '64em', '86em', '100em'],
  fonts: {
    inter: '"Inter", sans-serif',
  },
  fontSizes: {
    xs: '1.2rem',
    sm: '1.6rem',
    md: '2rem',
    lg: '2.8rem',
    xl: '4.4rem',
  },
  colors: {
    ...theme.colors,
    dark: '#222',
    light: '#fafafa',
    primary: '#9135AD',
  },
};
