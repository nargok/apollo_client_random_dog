import React, { Component } from 'react';

class HuskyList extends Component {

  refreshPage = () => {
    window.location.reload();
  }
  
  render() {
    return (
      <h1>ハスキー犬画像</h1>
    );
  }
}

export default HuskyList;