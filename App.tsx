import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Router from './src/routes';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <StatusBar style="auto" />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </SafeAreaView>
  );
}
