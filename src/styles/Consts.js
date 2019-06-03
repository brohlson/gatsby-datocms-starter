// You could use the theme provider in Layout.js or just import template strings from this file

import { breakpoints } from '../util/consts';

const mq = {
  mobile: `${breakpoints.mobile}px`,
  tablet: `${breakpoints.tablet}px`,
  desktop: `${breakpoints.desktop}px`,
};

export const font = {
  h1: `
        font-size: 5rem;
        @media screen and (max-width: ${mq.tablet}) {
            font-size: 4rem;
        }
        @media screen and (max-width: ${mq.mobile}) {
          font-size: 3rem;
      }
    `,
};
