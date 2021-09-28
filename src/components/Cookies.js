import * as React from 'react';

class Cookies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: false,
    };
  }

  componentDidMount() {
    if (document.cookie.indexOf('cookies_accepted=true') > -1) {
      this.setState({ accepted: true });
    }
  }

  handleAcceptCookiesBtn() {
    const expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 1);
    document.cookie = `cookies_accepted=true;expires=${expireDate.toUTCString()}`;
    this.setState({ accepted: true });
  }

  render() {
    if (!this.state.accepted)
      return (
        <div className="cookies">
          <div className="cookies__inner">
            <p className="cookies__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nibh tempor urna elementum eget in dui non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nibh tempor urna elementum eget in dui non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nibh tempor urna elementum eget in dui no w Polityce prywatności.</p>
            <button type="button" className="cookies__accept-btn" onClick={this.handleAcceptCookiesBtn.bind(this)}>Akceptuję</button>
          </div>
        </div>
      );
    else
      return null;
  }
}

export default Cookies;
