import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/components/Main';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return(
    <PaperProvider>
      {/* <Main /> */}
      <HomeScreen />
    </PaperProvider>
  );
};

export default App;