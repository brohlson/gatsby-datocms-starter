import React from 'react';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const SEO = ({ meta }) => {
  return <HelmetDatoCms seo={meta} />;
};

SEO.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default SEO;
