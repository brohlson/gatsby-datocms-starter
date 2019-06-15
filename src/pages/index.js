import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../containers/Layout';
import SEO from '../components/SEO';
import ModalContext from '../store/modalContext';

import { font, colors } from '../consts/style';

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 20px;
`;

const Inner = styled.div`
  width: 700px;
  max-width: 100%;
  text-align: center;
  pre {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 4px;
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

const Title = styled.h1`
  ${font.h1}
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query indexQuery {
      datoCmsHomePage {
        title
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
    }
  `);

  const { title, seoMetaTags } = data.datoCmsHomePage;
  return (
    <Layout>
      <SEO meta={seoMetaTags} />
      <Wrapper>
        <Inner>
          <Title>{title}</Title>
          <pre>
            gatsby new MY_SITE
            https://github.com/brohlson/gatsby-datocms-starter
          </pre>
          <ModalContext.Consumer>
            {({ openModal }) => {
              return <button onClick={openModal}>Open Modal</button>;
            }}
          </ModalContext.Consumer>
          <Link to="/blog">
            <button css={{ marginLeft: '.5em' }}>Blog Page</button>
          </Link>
        </Inner>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
