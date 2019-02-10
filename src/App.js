import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import client from './client';
import { GET_SINGLE_RANDOM_DOG } from './graphql';

class App extends Component {

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={GET_SINGLE_RANDOM_DOG}>
          {
            ({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;

              const image = data.randomDog.image;
              console.log(image);

              return (
                <div className="App">
                  <h1>ランダム犬画像ギャラリー</h1>
                  <Button primary onClick={this.refreshPage}>Reload</Button>
                  <div className="dogGallery">
                    <img className="dogImage" src={image} width="300" heigh="200" alt="randomDog" />
                  </div>
                </div>
              );
            }
          }
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
