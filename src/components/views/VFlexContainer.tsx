import React from 'react';
import {View} from 'react-native';
import viewsStyle from './style';

const VFlexContainer: React.FC<{
  width: number | string;
  height: number | string;
}> = ({width, height, children}) => (
  <View style={[{width, height}, viewsStyle.vFlexContainer]}>{children}</View>
);

export default VFlexContainer;
