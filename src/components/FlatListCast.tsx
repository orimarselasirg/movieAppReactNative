/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { Cast } from '../interfaces/movieDetailInterface';
import { ActorDetail } from './ActorDetail';

interface Props {
  title?: string;
  castList: Cast[];
}

export const FlatListCast = ({title, castList}: Props) => {

  return (
    <View style={{height: 260}}>
      <Text style={{fontSize: 18, marginTop: 10, fontWeight: 'bold', marginBottom: 7, color: 'black'}}>{title}</Text>
      <FlatList
        data={castList}
        renderItem={({item}: any)=> <ActorDetail actor={item}/>}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10, height: 70}}
      />
  </View>
  );
};

