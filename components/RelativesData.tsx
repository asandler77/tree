import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PersonalData } from './types';

interface Props {
  relativeData: PersonalData;
}

export default ({ relativeData }: Props) => {
  const { father, mother, onPersonPress, fatherId } = relativeData;
  const goToFather = () => {
    console.log('fatherId', fatherId);
    fatherId && onPersonPress && onPersonPress(fatherId);
  };
  return (
    <View style={styleSheet.relativeDataContainer}>
      <TouchableOpacity onPress={goToFather}>
        <Text style={styleSheet.relativeDataTitle}>Father: {father}</Text>
      </TouchableOpacity>
      <Text style={styleSheet.relativeDataTitle}>Mother: {mother}</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  personalDataContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  relativeDataContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  relativeDataTitle: {
    fontSize: 30,
  },
});
