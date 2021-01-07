import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from './_common';

var {height} = Dimensions.get('window');

export default global = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b3b3b3',
    width: '25%',
  },
  information:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b3b3b3',
    width: '25%',
  }
});
