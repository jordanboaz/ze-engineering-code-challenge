import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './src/views/Home';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </ApolloProvider>
  );
}
