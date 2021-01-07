import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from './src/scenes/Detail/Detail';
import Feed from './src/scenes/Feed/Feed';
import {PRIMARY_COLOR} from './src/assets/style/_common';
import {Text, Header} from 'native-base';
import global from './src/assets/style/_main';

const Stack = createStackNavigator();

function TitleFeed() {
  return (
    <Header style={[global.header]}>
      <Text style={[global.textHeader]}>Feed</Text>
    </Header>
  );
}
function TitleDetail() {
  return (
    <Header style={[global.header, {width: '80%'}]}>
      <Text style={[global.textHeader]}>Detalle</Text>
    </Header>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed">
        <Stack.Screen
          name="feed"
          component={Feed}
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
            headerTintColor: '#ffffff',
            headerTitle: (props) => <TitleFeed {...props} />,
          }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
            headerTintColor: '#ffffff',
            headerTitle: (props) => <TitleDetail {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
