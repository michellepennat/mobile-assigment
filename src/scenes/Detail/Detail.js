import React from 'react';

import {Container, Header} from 'native-base';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './Detail.style';
import Card from '../../components/CardDetail/CardDetail';

const Detail = () => (
  <SafeAreaView>
    <Header style={[styles.header]}>
      <TouchableOpacity>
        <Text>Atrás</Text>
      </TouchableOpacity>
      <Text style={[styles.textHeader]}>Detalle</Text>
    </Header>
    <View style={[styles.container]}>
      <Card />
    </View>
  </SafeAreaView>
);
export default Detail;
