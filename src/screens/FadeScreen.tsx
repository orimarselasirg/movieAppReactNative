import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View style={{flex:1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{backgroundColor: '#084F6A', width: 100, height: 100, borderColor: 'white', borderWidth: 10, opacity: opacity}}/>
      <Button title="fade in" onPress={fadeIn}/>
      <Button title="fade out" onPress={fadeOut}/>
    </View>
  );
};
