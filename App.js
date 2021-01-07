import React from 'react';
import {StatusBar} from 'react-native';
import {View} from 'native-base';
import {BACKGROUND_COLOR, PRIMARY_COLOR} from './src/assets/style/_common';

import Detail from './src/scenes/Detail/Detail';
import Feed from './src/scenes/Feed/Feed';

const App = () => {
  return (
    <View style={{backgroundColor: BACKGROUND_COLOR}}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
      {/* <Feed /> */}
      <Detail />
    </View>
  );
};

export default App;
