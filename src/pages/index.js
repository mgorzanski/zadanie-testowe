import React from "react";

import Header from './../components/Header';
import Hero from './../components/Hero';

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Hero />
        </main>
      </>
    );
  }
}

export default IndexPage;
