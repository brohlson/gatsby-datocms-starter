import React from 'react';
import Layout from '../containers/Layout/Layout';
import SEO from '../components/SEO';
import ModalContext from '../store/modalContext';
import { font } from '../styles/Consts';
import styled from 'styled-components';

const Title = styled.h1`
  ${font.h1}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Home</Title>
    <ModalContext.Consumer>
      {({ openModal }) => {
        return <button onClick={openModal}>Open Modal</button>;
      }}
    </ModalContext.Consumer>
  </Layout>
);

export default IndexPage;
