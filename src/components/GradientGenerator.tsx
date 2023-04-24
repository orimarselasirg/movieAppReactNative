import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientGenerator = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.6}}
        style={{...StyleSheet.absoluteFillObject}}
        >
        {children}
      </LinearGradient>
    </View>
  );
};
