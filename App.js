import React from 'react';
import { store } from './store'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>

  );
}
