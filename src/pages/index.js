import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import SEO from '../components/SEO';
import ModalContext from '../store/modalContext';
import { PageWrapper, PageInner, PageTitle } from '../components/Elements';

const indexQuery = graphql`
  {
    datoCmsHomePage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(indexQuery);
  const { title, seoMetaTags } = data.datoCmsHomePage;
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{title}</PageTitle>
          <pre>
            gatsby new site https://github.com/brohlson/gatsby-datocms-starter
          </pre>
          <ModalContext.Consumer>
            {({ openModal }) => {
              return <button onClick={openModal}>Open Modal</button>;
            }}
          </ModalContext.Consumer>
          <Link to="/blog">
            <button css={{ marginLeft: '.5em' }}>Blog Page</button>
          </Link>
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
};

export default IndexPage;
