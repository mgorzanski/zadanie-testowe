import * as React from 'react';
import PropTypes from "prop-types";

import Header from './Header';
import Cookies from './Cookies';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <>
        <Header />
        <main id="page-content" className="main main--header-fixed">
          {this.props.children}
        </main>
        <Cookies />
      </>
    );
  }
}

export default Layout;
