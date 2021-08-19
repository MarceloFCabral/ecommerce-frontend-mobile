import React from 'react';
import {View} from 'react-native';
import viewsStyle from './style';

const Container: React.FC = ({children}) => (
  <View style={viewsStyle.container}>{children}</View>
);

export default Container;
