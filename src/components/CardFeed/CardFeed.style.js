import {StyleSheet} from 'react-native';
import {WHITE_COLOR} from '../../assets/style/_common';

export default style = StyleSheet.create({
  card: {
    backgroundColor: WHITE_COLOR,
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 20,
  },
});
