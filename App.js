import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
  // console.log('Extra:', Constants.manifest.extra);
  return(
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;