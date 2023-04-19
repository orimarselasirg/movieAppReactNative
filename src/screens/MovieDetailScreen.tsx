import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import { View, Image, Dimensions, StyleSheet, ScrollView, Text } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetailScreen'>{}
const {height} = Dimensions.get('window');


export const MovieDetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri: uri}} style={styles.imagePoster}/>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.movieSubtitle}>{movie.original_title}</Text>
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        <Icon
          name="star-outline"
          size={20}
          color="grey"
        />
      </View>
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
});
