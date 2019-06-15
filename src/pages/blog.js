import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { map } from 'lodash';

import Layout from '../containers/Layout';
import SEO from '../components/SEO';

import { font, colors } from '../consts/style';

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 400px;
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
  }
`;

const Title = styled.h1`
  ${font.h1}
`;

const PostLink = styled.div`
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

const Blog = () => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      page: datoCmsBlogPage {
        title
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      posts: allDatoCmsBlogPost(
        sort: { fields: [meta___createdAt], order: ASC }
      ) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);
  const { title, seoMetaTags } = data.page;
  const { edges } = data.posts;
  return (
    <Layout>
      <SEO meta={seoMetaTags} />
      <Wrapper>
        <Inner>
          <Title>{title}</Title>
          {map(edges, post => (
            <PostLink>
              <Link to={`/blog/${post.node.slug}/`}>{post.node.title}</Link>
            </PostLink>
          ))}
          <Link to="/">
            <button css={{ marginLeft: '.5em' }}>Go Home</button>
          </Link>
        </Inner>
      </Wrapper>
    </Layout>
  );
};

export default Blog;
