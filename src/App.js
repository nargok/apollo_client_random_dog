import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>ランダム犬画像ギャラリー</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
