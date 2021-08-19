import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import uiStyle from './style';

const TextInput: React.FC<{
  width: string | number;
  height: string | number;
  multiline: boolean;
  placeholder: string;
}> = ({width, height, multiline, placeholder}) => (
  <RNTextInput
    style={[{width, height}, uiStyle.textInput]}
    multiline={multiline}
    placeholder={placeholder}
  />
);

export default TextInput;
