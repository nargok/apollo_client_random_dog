import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { GET_SINGLE_RANDOM_DOG } from './graphql';

class Random extends Component {

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <Query query={GET_SINGLE_RANDOM_DOG}>
        {
          ({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const image = data.randomDog.image;
            console.log(image);

            return (
              <div className="App">
                <h1>ランダム犬画像</h1>
                <Button primary onClick={this.refreshPage}>
                  <span role="img" aria-label="footprint">🐾</span>
                  Reload
                </Button>
                <Link to="/husky"><Button>Husky</Button></Link>
                <div className="dogGallery">
                  <img className="dogImage" src={image} width="300" heigh="200" alt="randomDog" />
                </div>
              </div>
            );
          }
        }
      </Query>
    );
  }
}

export default Random;
