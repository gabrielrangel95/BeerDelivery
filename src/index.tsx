import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router } from '@router';
import client from '@apollo/client';

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}
