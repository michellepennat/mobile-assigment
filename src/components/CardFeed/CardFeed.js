import React from 'react';

import {Text, TouchableOpacity, Image, View} from 'react-native';
import {H1, H2} from 'native-base';
import styles from './CardFeed.style';
import global from '../../assets/style/_main';

export default CardFeed = ({
  name,
  origin,
  id,
  created,
  image,
  species,
  status,
  gender,
  navigation,
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('detail', {
        name,
        origin,
        id,
        created,
        species,
        status,
        gender,
        image,
      })
    }
    style={[styles.card]}>
    <H1 style={[global.title]}>{name}</H1>
    <Image
      source={{
        uri: image,
      }}
      style={[styles.image]}
    />
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Origin</H2>
      <Text style={[global.information]}>{origin?.name}</Text>
    </View>
    <View style={[styles.row]}>
      <H2 style={[global.subtitle]}>Created</H2>
      <Text style={[global.information]}>{created}</Text>
    </View>
  </TouchableOpacity>
);
