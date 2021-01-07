import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from './_common';

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
  information: {
    fontSize: 16,
    color: '#6f6fb9',
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    display: 'flex',
    alignItems: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  textHeader: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
