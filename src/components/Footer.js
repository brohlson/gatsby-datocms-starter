import React from 'react';
import styled from 'styled-components';

import { colors } from '../consts/style';

export const Wrapper = styled.div`
  display: flex;
  height: 40px;
  color: white;
  background: ${colors.purple};
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return <Wrapper>It&apos;s {year}</Wrapper>;
};

export default Footer;
