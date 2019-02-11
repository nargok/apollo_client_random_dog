import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { HUSKY_IMAGES } from './graphql';

class HuskyList extends Component {

  refreshPage = () => {
    window.location.reload();
  }
  
  render() {
    return (
      <React.Fragment>
      <Query query={HUSKY_IMAGES}>
        {
          ({ loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const images = data.huskyCrazy.images;
            console.log(images);
            return (
              <h1>ハスキー犬画像</h1>
            )
          }
        }
      </Query>
      </React.Fragment>
    );
  }
}

export default HuskyList;