import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';

import client from './client';
import { GET_SINGLE_RANDOM_DOG } from './graphql';

class App extends Component {
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
