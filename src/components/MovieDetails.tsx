/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {movieDetails, Cast } from '../interfaces/movieDetailInterface';
import { FlatListCast } from './FlatListCast';

interface Props {
  movieFullDetail: movieDetails;
  castList: Cast[]
}

export const MovieDetails = ({movieFullDetail, castList }: Props) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="star-outline"
            size={20}
            color="grey"
          />
          <Text style={{marginLeft: 6}}>{movieFullDetail.vote_average}</Text>
          <Text style={{marginLeft: 5}}>- {movieFullDetail.genres.map(genre => genre.name).join(', ')}</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 18, marginTop: 10, fontWeight: 'bold', marginBottom: 7, color: 'black'}}>Sipnosis</Text>
        <Text style={{fontSize: 15}}>{movieFullDetail?.overview}</Text>
      </View>
      <View>
        <Text style={{fontSize: 18, marginTop: 10, fontWeight: 'bold', marginBottom: 7, color: 'black'}}>Presupuesto</Text>
        <Text style={{fontSize: 15}}>{new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(movieFullDetail?.budget)}</Text>
      </View>
      {/* <View>
        <Text style={{fontSize: 18, marginTop: 10, fontWeight: 'bold', marginBottom: 7, color: 'black'}}>Reparto de actores</Text>
          {castList.map(actor => (
            <Text key={actor.id}>{actor.name}</Text>
          ))}
      </View> */}
      <FlatListCast castList={castList} title="Reparto de Actores"/>
    </View>
  );
};
