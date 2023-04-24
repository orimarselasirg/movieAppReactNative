/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovieDb } from '../hooks/useMovieDb';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/moviePoster';
import { FlatListMoviesSection } from '../components/FlatListMoviesSection';
import { GradientGenerator } from '../components/GradientGenerator';
export const HomeScreen = () => {
  // const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const windowWith = Dimensions.get('window').width;

  const {nowPlaying, popular, topRated, upcoming, Loading, isLoading} = useMovieDb();
  // console.log(nowPlaying[1].title);

  const getColor = (index: number) => {
    console.log(nowPlaying[index].title);
  };


  return (
    <GradientGenerator>
      {isLoading
      ? <Loading/>
      : <ScrollView>
        <View style={{flex: 1, marginTop: top + 20}}>
          <View style={{height: 400}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any)=> <MoviePoster movie={item}/>}
              sliderWidth={windowWith}
              itemWidth={300}
              inactiveSlideOpacity={0.85}
              onSnapToItem={index => getColor(index)}
            />
          </View>
            <FlatListMoviesSection
              title="Popular"
              movies={popular}
            />
            <FlatListMoviesSection
              movies={topRated}
              title="Mejor Calificadas"
            />
            <FlatListMoviesSection
              movies={upcoming}
              title="Pronto en cines"
            />
          </View>
        </ScrollView>
    }


    </GradientGenerator>
  );
};
