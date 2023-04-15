/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text,FlatList } from 'react-native';
import { Movies } from '../interfaces/movieInterfaces';
import { MoviePoster } from './moviePoster';

interface Props {
  title: string;
  movies: Movies[];
}

export const FlatListMoviesSection = ({movies, title }: Props) => {
  return (
    <View style={{height: 260}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 7}}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}: any)=> <MoviePoster movie={item} height={200} width={140}/>}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
  </View>
  );
};
