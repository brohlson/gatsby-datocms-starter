import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { colors } from '../consts/style';
import { headerTypes } from '../types/propTypes';

const Wrapper = styled.div`
  background: ${colors.purple};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 4.2rem;
  margin: auto;
`;

export default function Header({ location }) {
  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  useEffect(() => console.log(location), [location]);

  return (
    <Wrapper>
      <Logo>
        <StaticImage src="../images/logo.png" alt="Logo" />
      </Logo>
    </Wrapper>
  );
}

Header.propTypes = headerTypes;
