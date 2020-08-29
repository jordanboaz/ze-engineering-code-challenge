import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { store } from './src/store';
import Router from './src/routes';
import Toast from './src/components/Toast';
import getEnvVars from './env';

const { apiUrl } = getEnvVars();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: apiUrl,
});

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <StatusBar style="auto" />
        <ApolloProvider client={client}>
          <Router />
          <Toast />
        </ApolloProvider>
      </SafeAreaView>
    </Provider>
  );
}
