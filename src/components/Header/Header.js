import React, { Component } from 'react';

import "./Header.css"


class Header extends Component {


  render() {
    return (
        <div className="header-wrapper">
            <div className="header-inner-wrapper">
                <h1 className="site-name">JOBS PORTAL</h1>
            </div>
        </div>
    );
  }
}

export default Header;
