import React from 'react';
import styled from 'styled-components';

import Layout from '../containers/Layout';
import SEO from '../components/SEO';

const Wrapper = styled.div`
  padding: 6rem 0;
  text-align: center;
  height: calc(100vh - 100px);
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>404</h1>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
