
import React from 'react';
import { Cast } from '../interfaces/movieDetailInterface';
import { Text, Image, View, StyleSheet, Platform } from 'react-native';

interface Props {
  actor: Cast
}

export const ActorDetail = ({actor}: Props) => {
  var uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  if (actor.profile_path === null) {
    uri = 'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg';
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.image}/>
      <View style={styles.actorInfomation}>
        <Text style={styles.textInformation}>
          {actor.name}
        </Text>
        <Text>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container : {
    width: 250,
    height: 80,
    flexDirection: 'row',
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: Platform.OS !== 'ios' ? 'white' : '',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.51,
    shadowRadius: 15.16,
    elevation: 5,
  },
  actorInfomation: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  textInformation: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    // flex: 1,
    borderRadius: 3,
    width: 50,
    height: 50,
    // justifyContent: 'center',
    marginTop: 15,
  },
});
