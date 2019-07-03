import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import SEO from '../components/SEO';

import { font, colors, duration } from '../consts/style';

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
  text-align: left;
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

const BlogPost = ({ data }) => {
  const { title, seoMetaTags, content } = data.project;
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <Wrapper>
        <Fade left duration={duration}>
          <Inner>
            <Title>{title}</Title>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Link to="/blog">
              <button>Go Back</button>
            </Link>
          </Inner>
        </Fade>
      </Wrapper>
    </Fragment>
  );
};

export const projectQuery = graphql`
  query($slug: String!) {
    project: datoCmsBlogPost(slug: { eq: $slug }) {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;
