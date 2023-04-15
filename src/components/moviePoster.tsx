/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { styles } from '../styles/moviePosterStyle';
import { View, Image } from 'react-native';
import { Movies } from '../interfaces/movieInterfaces';

interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 380,  width = 280 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={{...styles.container, height: height, width: width, marginHorizontal: 8}}>
      <Image source={{uri: uri}} style={styles.image}/>
    </View>
  );
};
