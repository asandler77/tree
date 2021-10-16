import { Image, StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import { PersonalData } from './types';
import RelativesData from './RelativesData';

const cardWidth = SCREEN_WIDTH * 0.8;
const cardHeight = SCREEN_HEIGHT * 0.7;

export default (personData: PersonalData): ReactElement => {
  const { name, sureName, imageUri } = personData;
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.personalDataContainer}>
        <View>
          <Text style={styleSheet.personalDataTitle}>{name}</Text>
          <Text style={styleSheet.personalDataTitle}>{sureName}</Text>
        </View>
        <Image source={{ uri: imageUri }} style={styleSheet.image} />
      </View>
      <RelativesData relativeData={personData} />
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
  container: {
    borderWidth: 1,
    height: cardHeight,
    width: cardWidth,
    borderRadius: 20,
    marginHorizontal: 15,
  },
});
