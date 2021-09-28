import React from "react";

import Header from './../components/Header';
import Hero from './../components/Hero';
import CompanyResults from './../components/CompanyResults'

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <CompanyResults />
        </main>
      </>
    );
  }
}

export default IndexPage;
