import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
const initialContext = {
  authStorage,
  toastMessage: 'undefined'
};

const App = () => {
  // console.log('Extra:', Constants.manifest.extra);
  return(
    <NativeRouter>
      {/* <ApolloProvider client={apolloClient}> */}
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={initialContext}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;