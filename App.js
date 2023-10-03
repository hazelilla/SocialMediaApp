import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from './navigation/MainNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );

}



export default App;
