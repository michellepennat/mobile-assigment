import React from 'react';
import {StatusBar, Text} from 'react-native';
import {View} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BACKGROUND_COLOR, PRIMARY_COLOR} from './src/assets/style/_common';

import Detail from './src/scenes/Detail/Detail';
import Feed from './src/scenes/Feed/Feed';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <View style={{backgroundColor: BACKGROUND_COLOR}}>
    //   <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed">
        <Stack.Screen name="feed" component={Feed} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
};

export default App;
