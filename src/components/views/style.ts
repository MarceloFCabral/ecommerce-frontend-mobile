import {Dimensions, StyleSheet} from 'react-native';
import {BG_COLOR} from '../../theme';

const viewsStyle = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeringContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  vFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default viewsStyle;
