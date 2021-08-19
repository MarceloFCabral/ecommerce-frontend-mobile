import React from 'react';
import {Text as RNText} from 'react-native';
import uiStyle from './style';

const Text: React.FC<{
  type: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
}> = ({type, color, children}) => {
  const obtainStyle = () => {
    let style = uiStyle.mediumTextPrimary;
    if (color === 'primary') {
      switch (type) {
        case 'small':
          style = uiStyle.smallTextPrimary;
          break;
        case 'medium':
          style = uiStyle.mediumTextPrimary;
          break;
        case 'large':
          style = uiStyle.largeTextPrimary;
          break;
      }
    } else {
      switch (type) {
        case 'small':
          style = uiStyle.smallTextSecondary;
          break;
        case 'medium':
          style = uiStyle.mediumTextSecondary;
          break;
        case 'large':
          style = uiStyle.largeTextSecondary;
          break;
      }
    }
    return style;
  };
  return <RNText style={obtainStyle()}>{children}</RNText>;
};

export default Text;
