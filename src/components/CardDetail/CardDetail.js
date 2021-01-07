import React from 'react';

import {Text, Image, View} from 'react-native';
import {H1, H2} from 'native-base';
import styles from './CardDetail.style';
import global from '../../assets/style/_main';

export default CardDetail = ({
  name,
  origin,
  status,
  species,
  gender,
  created,
  image,
}) => (
  <View style={[styles.card]}>
    <Image
      source={{
        uri: image,
      }}
      style={{width: 100, height: 100}}
    />
    <H1 style={[global.title, styles.title]}>{name}</H1>
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Origin</H2>
      <Text style={[global.information]}>{origin?.name}</Text>
    </View>
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Status</H2>
      <Text style={[global.information]}>{status}</Text>
    </View>
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Species</H2>
      <Text style={[global.information]}>{species}</Text>
    </View>
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Gender</H2>
      <Text style={[global.information]}>{gender}</Text>
    </View>
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Created</H2>
      <Text style={[global.information]}>{created}</Text>
    </View>
  </View>
);
