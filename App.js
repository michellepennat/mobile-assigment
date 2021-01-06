import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {PRIMARY_COLOR} from './src/assets/style/_common';

import Feed from './src/scenes/Feed/Feed';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
      <SafeAreaView>
        <Feed />
      </SafeAreaView>
    </>
  );
};

export default App;
