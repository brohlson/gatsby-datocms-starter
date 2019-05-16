import { css } from 'styled-components';
import { breakpoints } from '../util/consts';

// Creates up & down media queries for your breakpoints
// *** Usage ***
// import media from "**/MediaQueries.js"
// export const StyledComponent = styled.div`
// ${media.tablet`
//   display: flex;
// `}
// ${media.mobile_up`
//   display: none;
// `}
//`

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;

  acc[`${label}_up`] = (...args) => css`
    @media screen and (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
