import { StatusBar } from 'expo-status-bar';
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
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <Router />
      </SafeAreaView>
    </ApolloProvider>
  );
}
