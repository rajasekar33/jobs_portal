import React, { Component } from 'react';

import './Loader.css'

const styles = {
    border: "4px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "4px solid #3498db",
    width: "50px",
    height:" 50px",
    _webkitAnimation: "spin 2s linear infinite",
    animation: "spin 2s linear infinite",
    margin: "20px"
}


class Loader extends Component {


  render() {
    const { style } = this.props
   
    return (
        <div>
            <div className="loader" style={{...styles, ...this.props.style}}> </div>
        </div>
    );
  }
}

export default Loader;
