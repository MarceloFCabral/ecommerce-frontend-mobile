import React from 'react';
import {View} from 'react-native';
import viewsStyle from './style';
const CenteringContainer: React.FC<{
  width: number | string;
  height: number | string;
}> = ({width, height, children}) => (
  <View style={[{width, height}, viewsStyle.centeringContainer]}>
    {children}
  </View>
);

export default CenteringContainer;
