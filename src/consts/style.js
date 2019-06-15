import bp from './breakpoints';

const mq = {
  mobile: `${bp.mobile}px`,
  tablet: `${bp.tablet}px`,
  desktop: `${bp.desktop}px`,
};

export const font = {
  h1: `
        font-size: 5rem;
        @media screen and (max-width: ${mq.tablet}) {
            font-size: 4rem;
        }
    `,
};

export const colors = {
  dark: '#222',
  light: '#fafafa',
  purple: '#9135AD',
};
