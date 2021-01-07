import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, PRIMARY_COLOR} from '../../assets/style/_common';

export default style = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: PRIMARY_COLOR,
  },
});
