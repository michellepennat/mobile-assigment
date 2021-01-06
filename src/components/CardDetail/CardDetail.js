import React from 'react';

import {Text, TouchableOpacity, Image} from 'react-native';
import {H1, H2} from 'native-base';

export default CardDetail = (props) => {
  const {
      style, 
      textName, 
      textNameStyle, 
      width, 
      radius, 
      onPressAction
    } = props;
  return (
    <TouchableOpacity>
      <H1>{textName}</H1>
      <Image />
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

CardDetail.defaultProps = {
  height: 55,
  radius: 0,
  width: '80%',
  textStyle: {},
};
