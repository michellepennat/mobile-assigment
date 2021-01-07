import React from 'react';

import {Text, TouchableOpacity, Image, View} from 'react-native';
import {H1, H2} from 'native-base';
import styles from './CardFeed.style';
import global from '../../assets/style/_main';

export default CardFeed = ({
  textName,
  textOrigin,
  textCreated,
  img,
  onPressAction,
}) => {
  return (
    <TouchableOpacity style={[styles.card]}>
      <H1 style={[global.title]}>{textName}</H1>
      {/* <Image source={require(img)} /> */}
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Origin</H2>
        <Text style={[global.information]}>{textOrigin}</Text>
      </View>
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Created</H2>
        <Text style={[global.information]}>{textCreated}</Text>
      </View>
    </TouchableOpacity>
  );
};

CardFeed.defaultProps = {
  textStyle: {},
};
