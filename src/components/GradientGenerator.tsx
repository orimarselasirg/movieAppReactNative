/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientGenerator = ({children}: Props) => {
 const {colors, prevColors, setMainPrevColor} = useContext(GradientContext);
 const {fadeIn, opacity, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(()=>{
      setMainPrevColor(colors);
      fadeOut();
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);


  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.6}}
        style={{...StyleSheet.absoluteFillObject}}
        >
          <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
          <LinearGradient
            colors={[colors.primary, colors.secondary, 'white']}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.5, y: 0.6}}
            style={{...StyleSheet.absoluteFillObject}}
          />
          </Animated.View>
        {children}
      </LinearGradient>
    </View>
  );
};
