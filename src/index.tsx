import * as React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { StatusBar } from 'react-native';
import { Router } from '@router';
import client from '@apollo/client';
import { store } from '@redux/store';

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ApolloProvider>
    );
  }
}
