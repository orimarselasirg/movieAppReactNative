/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import movieDb from '../api/movieDbApi';
import { MovieDbResponse, Movies } from '../interfaces/movieInterfaces';
import { ActivityIndicator, View } from 'react-native';

interface MoviesState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovieDb = () => {
  const [ moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying : [],
    popular : [],
    topRated : [],
    upcoming : [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getLatestMovies = async () => {
    try {
    const nowPlayingPromise = movieDb.get<MovieDbResponse>('/now_playing');
    const popularPromise = movieDb.get<MovieDbResponse>('/popular');
    const topRatedPromise = movieDb.get<MovieDbResponse>('/top_rated');
    const upcomingPromise = movieDb.get<MovieDbResponse>('/upcoming');
    const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

      setMoviesState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLatestMovies();
}, []);

const Loading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={100} color="red" />
      </View>
    );
};
  return {
    ...moviesState,
    isLoading,
    Loading,
  };
};
