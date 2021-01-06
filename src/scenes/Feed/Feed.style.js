import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from './_common';

var {height} = Dimensions.get('window');

export const style = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: '10%',
  },
});
