import React from 'react';
import {Pressable, Text} from 'react-native';
import {BUTTON_RIPPLE} from '../../theme';
import uiStyle from './style';

const Button: React.FC<{text: string}> = ({text}) => (
  <Pressable android_ripple={{color: BUTTON_RIPPLE}} style={uiStyle.button}>
    <Text style={uiStyle.buttonText}>{text}</Text>
  </Pressable>
);
export default Button;
