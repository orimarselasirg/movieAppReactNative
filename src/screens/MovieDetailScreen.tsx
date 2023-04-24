import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, Dimensions, StyleSheet, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetailScreen'>{}
const {height} = Dimensions.get('window');


export const MovieDetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, movieFullDetail, cast} = useMovieDetail(movie.id);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri: uri}} style={styles.imagePoster}/>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.movieSubtitle}>{movie.original_title}</Text>
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </View>

      {
        isLoading
        // eslint-disable-next-line react-native/no-inline-styles
        ? <ActivityIndicator size={35} color="grey" style={{marginTop: 30}}/>
        : <MovieDetails movieFullDetail={movieFullDetail!} castList={cast}/>
      }

    <TouchableOpacity style={styles.backArow} onPress={()=> navigation.pop()}>
      <Icon
        name="arrow-back-outline"
        color="white"
        size={50}

      />
    </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  imageContainer : {
    overflow: 'hidden',
    width: '100%',
    height: height * 0.7,
    marginBottom: 10,
    // marginTop: 10,
    shadowColor: '#000',
    // backgroundColor:'red',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 7,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  imagePoster: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
  },
  movieSubtitle: {
    fontSize: 16,
  },
  backArow: {
    position: 'absolute',
    left: 5,
  },
});
