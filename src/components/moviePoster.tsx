/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { styles } from '../styles/moviePosterStyle';
import { Image, TouchableOpacity } from 'react-native';
import { Movies } from '../interfaces/movieInterfaces';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';

interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'> // porque lo trae desde el home?????

export const MoviePoster = ({movie, height = 380,  width = 280 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'HomeScreen'>>();
  return (
    <TouchableOpacity
      style={{...styles.container, height: height, width: width, marginHorizontal: 7, paddingHorizontal: 7}}
      activeOpacity={0.8}
      onPress={()=>navigation.navigate('MovieDetailScreen', movie)}>
      <Image source={{uri: uri}} style={styles.image}/>
    </TouchableOpacity>
  );
};
