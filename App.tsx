import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { store } from './src/store';
import Router from './src/routes';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <StatusBar style="auto" />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </SafeAreaView>
    </Provider>
  );
}
