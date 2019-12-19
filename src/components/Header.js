import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import { colors } from '../consts/style';
import { spin } from '../style/animations';

const Wrapper = styled.div`
  background: ${colors.purple};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 4rem;
  margin: auto;
  animation: ${spin} 10s linear infinite;
`;

const headerQuery = graphql`
  {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(headerQuery);
  return (
    <Wrapper>
      <Image fluid={data.logo.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default Header;
