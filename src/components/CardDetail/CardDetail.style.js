import {StyleSheet, Dimensions} from 'react-native';
import {WHITE_COLOR} from '../../assets/style/_common';

var {height} = Dimensions.get('window');

export default style = StyleSheet.create({
  card: {
    backgroundColor: WHITE_COLOR,
    width: '100%',
    borderRadius: 10,
    paddingBottom: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    paddingHorizontal: 20,
  },
});
