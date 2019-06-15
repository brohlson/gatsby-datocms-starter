import React from 'react';
import styled from 'styled-components';

import { colors } from '../consts/style';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  background: ${colors.purple};
  padding: 10px;
`;

const Image = styled(Img)`
  width: 40px;
  margin: auto;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "white-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
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
