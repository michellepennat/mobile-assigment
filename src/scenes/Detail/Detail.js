import React from 'react';

import {Container, Header} from 'native-base';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './Detail.style';
import CardDetail from '../../components/CardDetail/CardDetail';

const Detail = ({route, navigation}) => (
  <SafeAreaView>
    <Header style={[styles.header]}>
      <TouchableOpacity style={[styles.back]}>
        <Text style={[styles.textBack]}>Atrás</Text>
      </TouchableOpacity>
      <Text style={[styles.textHeader]}>Detalle</Text>
    </Header>
    <View style={[styles.container]}>
      <CardDetail {...route.params} />
    </View>
  </SafeAreaView>
);
export default Detail;
