import React from 'react';

import {View, SafeAreaView} from 'react-native';
import styles from './Detail.style';
import CardDetail from '../../components/CardDetail/CardDetail';
import AppStatusBar from '../../components/AppStatusBar/AppStatusBar';
import {PRIMARY_COLOR} from '../../assets/style/_common';

const Detail = ({route, navigation}) => (
  <SafeAreaView style={styles.topSafeArea}>
    <AppStatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
    <View style={[styles.container]}>
      <CardDetail {...route.params} />
    </View>
  </SafeAreaView>
);
export default Detail;
