import React from "react";

import Layout from './../components/Layout';
import Seo from './../components/Seo';
import Hero from './../components/Hero';
import CompanyResults from './../components/CompanyResults'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="ailleron" />
        <Hero />
        <CompanyResults />
      </Layout>
    );
  }
}

export default IndexPage;
