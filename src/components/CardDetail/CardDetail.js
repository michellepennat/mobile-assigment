import React from 'react';

import {Text, Image, View} from 'react-native';
import {H1, H2} from 'native-base';
import styles from './CardDetail.style';
import global from '../../assets/style/_main';

export default CardDetail = ({
  textName,
  textOrigin,
  textStatus,
  textSpecies,
  textGender,
  textCreated,
  img,
}) => {
  return (
    <View style={[styles.card]}>
      {/* <Image source={require(img)}/> */}
      <H1 style={[global.title, styles.title]}>{textName}</H1>
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Origin</H2>
        <Text style={[global.information]}>{textOrigin}</Text>
      </View>
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Status</H2>
        <Text style={[global.information]}>{textStatus}</Text>
      </View>
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Species</H2>
        <Text style={[global.information]}>{textSpecies}</Text>
      </View>
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Gender</H2>
        <Text style={[global.information]}>{textGender}</Text>
      </View>
      <View style={[styles.row]}>
        <H2 style={[global.subtitle]}>Created</H2>
        <Text style={[global.information]}>{textCreated}</Text>
      </View>
    </View>
  );
};
