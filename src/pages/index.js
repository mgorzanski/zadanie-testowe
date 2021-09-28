import React from "react";

import Header from './../components/Header';
import Hero from './../components/Hero';
import CompanyResults from './../components/CompanyResults'
import Cookies from './../components/Cookies';

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main main--header-fixed">
          <Hero />
          <CompanyResults />
        </main>
        <Cookies />
      </>
    );
  }
}

export default IndexPage;
