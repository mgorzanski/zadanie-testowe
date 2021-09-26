import * as React from 'react';

import LogoAilleron from './../svg/logo-ailleron.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: false,
    };

    this.siteNavigationRef = React.createRef(null);
  }

  handleMenuButtonClick(event) {
    event.preventDefault();
    
    this.setState({
      ...this.state,
      menuOpened: !this.state.menuOpened,
    }, () => {
      if (this.state.menuOpened) {
        this.siteNavigationRef.current.style.setProperty('height', `${this.siteNavigationRef.current.scrollHeight}px`);
      } else {
        this.siteNavigationRef.current.style.setProperty('height', 0);
      }
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__left">
          <a href="#">
            <img className="header__logo" src={LogoAilleron} alt="ailleron" />
          </a>
        </div>
        <div className="header__right">
          <button 
            type="button" 
            className={['hamburger', 'hamburger--collapse', ...[this.state.menuOpened ? 'is-active': '']].join(' ').trim()} 
            aria-label={this.state.menuOpened ? 'Zamknij menu' : 'Otwórz menu'} aria-controls="site-navigation"
            onClick={this.handleMenuButtonClick.bind(this)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav 
            id="site-navigation" 
            className="header__nav"
            aria-hidden={!this.state.menuOpened}
            ref={this.siteNavigationRef}
          >
            <ul className="header__menu-list">
              <li className="header__menu-list-item">
                <a href="#">Sekcja_1</a>
              </li>
              <li className="header__menu-list-item">
                <a href="#">Sekcja_2</a>
              </li>
              <li className="header__menu-list-item">
                <a href="#">Sekcja_3</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
