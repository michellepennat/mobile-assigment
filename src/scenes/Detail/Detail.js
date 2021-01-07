import React from 'react';

import {View, SafeAreaView} from 'react-native';
import styles from './Detail.style';
import CardDetail from '../../components/CardDetail/CardDetail';

const Detail = ({route, navigation}) => (
  <SafeAreaView>
    <View style={[styles.container]}>
      <CardDetail {...route.params} />
    </View>
  </SafeAreaView>
);
export default Detail;
