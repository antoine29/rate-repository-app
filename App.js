import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';

const App = () => {
  return(
    <NativeRouter>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </NativeRouter>
  );
};

export default App;