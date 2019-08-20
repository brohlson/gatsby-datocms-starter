import styled from 'styled-components';

import { font, colors } from '../consts/style';

export const PageWrapper = styled.div`
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 2rem;
`;

export const PageInner = styled.div`
  width: 75rem;
  max-width: 100%;
  text-align: center;
  pre {
    background: rgba(0, 0, 0, 0.1);
    padding: 0.2rem 0.4rem;
    font-size: 1.2rem;
  }
  button {
    ${font.button};
    background: ${colors.dark};
    border: none;
    color: white;
    padding: 0.35em 0.7em;
    margin-top: 0.7em;
  }
`;

export const PageTitle = styled.h1`
  ${font.h1}
`;

export const PostLink = styled.div`
  margin-bottom: 1em;
  a {
    color: ${colors.light};
    background: ${colors.purple};
    padding: 0.35em 0.7em;
    font-style: italic;
    &:hover {
      text-decoration: none;
      background: ${colors.dark};
    }
  }
`;
