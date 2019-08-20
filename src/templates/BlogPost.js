import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
import { PageWrapper, PageInner, PageTitle } from '../components/Elements';

const BlogPost = ({ data }) => {
  const { title, seoMetaTags, content } = data.project;
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{title}</PageTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Link to="/blog">
            <button>Go Back</button>
          </Link>
        </PageInner>
      </PageWrapper>
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
