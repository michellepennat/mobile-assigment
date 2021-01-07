import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../assets/style/_common';

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
  header: {
    backgroundColor: PRIMARY_COLOR,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  back: {
    width: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  textBack: {
    fontSize: 14,
    color: '#ffffff',
    width: '25%',
    fontWeight: 'bold',
  },
  textHeader: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
