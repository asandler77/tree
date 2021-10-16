import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactElement } from 'react';
import { PersonType } from './types';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

const cardWidth = SCREEN_WIDTH * 0.8;
const cardHeight = SCREEN_HEIGHT * 0.7;

export default ({ name, imageUri, father, mother, sureName, onPersonPress }: PersonType): ReactElement => {
  const goToFather = () => {
    onPersonPress && onPersonPress(2);
  };
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.personalDataContainer}>
        <View>
          <Text style={styleSheet.personalDataTitle}>{name}</Text>
          <Text style={styleSheet.personalDataTitle}>{sureName}</Text>
        </View>
        <Image source={{ uri: imageUri }} style={styleSheet.image} />
      </View>
      <View style={styleSheet.relativeDataContainer}>
        <TouchableOpacity onPress={goToFather}>
          <Text style={styleSheet.relativeDataTitle}>Father: {father}</Text>
        </TouchableOpacity>
        <Text style={styleSheet.relativeDataTitle}>Mother: {mother}</Text>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 120,
    height: 160,
  },
  personalDataContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  personalDataTitle: {
    fontSize: 20,
  },
  relativeDataContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  relativeDataTitle: {
    fontSize: 30,
  },
  container: {
    borderWidth: 1,
    height: cardHeight,
    width: cardWidth,
    borderRadius: 20,
    marginHorizontal: 15,
  },
});
