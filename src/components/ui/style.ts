import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BUTTON_COLOR,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
  WHITE,
  GREY,
} from '../../theme';

// testing out TS features to try and get used to it
type myFontWeight = '400' | '500' | '600';
interface textStyle {
  fontSize: number;
  fontWeight: myFontWeight;
}
// text sizing and styling
const LARGE_TEXT: textStyle = {
  fontSize: 40,
  fontWeight: '500',
};
const MEDIUM_TEXT: textStyle = {
  fontSize: 30,
  fontWeight: '400',
};
const SMALL_TEXT: textStyle = {
  fontSize: 20,
  fontWeight: '400',
};

/*
styling with styled components using TypeScript does not preserve the original props of the styled component. Workarounds use advanced TS that I'm not familiar with,
so for now I'll just stick to creating a stylesheet and passing the style object as an argument to the style prop
*/

const uiStyle = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    backgroundColor: BG_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: BUTTON_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: BUTTON_COLOR,
    fontSize: 16,
    fontWeight: '300',
  },
  smallTextPrimary: {
    color: TEXT_PRIMARY_COLOR,
    ...SMALL_TEXT,
  },
  smallTextSecondary: {
    color: TEXT_SECONDARY_COLOR,
    ...SMALL_TEXT,
  },
  mediumTextPrimary: {
    color: TEXT_PRIMARY_COLOR,
    ...MEDIUM_TEXT,
  },
  mediumTextSecondary: {
    color: TEXT_SECONDARY_COLOR,
    ...MEDIUM_TEXT,
  },
  largeTextPrimary: {
    color: TEXT_PRIMARY_COLOR,
    ...LARGE_TEXT,
  },
  largeTextSecondary: {
    color: TEXT_SECONDARY_COLOR,
    ...LARGE_TEXT,
  },
  textInput: {
    backgroundColor: WHITE,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: GREY,
    paddingVertical: 2,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default uiStyle;
