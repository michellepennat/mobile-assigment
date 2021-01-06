import React from 'react';

import {Text, TouchableOpacity, Image, View} from 'react-native';
import {H1, H2} from 'native-base';

export default CardFeed = (props) => {
  const {
      style, 
      textName, 
      textOrigin,
      textNameStyle, 
      width, 
      radius, 
      onPressAction
    } = props;
  return (
    <TouchableOpacity>
      <H1>{textName}</H1>
      {/* <Image /> */}
      <View>
        <H2>Origin</H2>
        <Text>Data</Text>
      </View>
      <View>
        <H2>Created</H2>
        <Text>Data</Text>
      </View>
    </TouchableOpacity>
  );
};

CardFeed.defaultProps = {
  height: 55,
  radius: 0,
  width: '80%',
  textStyle: {},
};
