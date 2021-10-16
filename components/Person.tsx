import { Image, StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import { PersonType } from './types';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

const cardWidth = SCREEN_WIDTH * 0.8;
const cardHeight = SCREEN_HEIGHT * 0.8;

export default ({ name, imageUri }: PersonType): ReactElement => {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>{name}</Text>
      <Image source={{ uri: imageUri }} style={styleSheet.image} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  image: {
    borderWidth: 1,
    width: 120,
    height: 160,
  },
  title: {
    fontSize: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: 'green',
    height: cardHeight,
    width: cardWidth,
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
});
