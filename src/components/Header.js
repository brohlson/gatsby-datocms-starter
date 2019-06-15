import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { colors } from '../consts/style';
import { spin } from '../style/animations';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  background: ${colors.purple};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 40px;
  margin: auto;
  animation: ${spin} 10s linear infinite;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Image fluid={data.logo.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default Header;
