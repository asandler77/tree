import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PersonalData } from './types';

interface Props {
  relativeData: PersonalData;
}

export default ({ relativeData }: Props) => {
  const { father, mother, onPersonPress, fatherId, motherId, sonId, son } = relativeData;
  // const papaId = fatherId ?? '';
  // const mamaId = motherId ?? '';
  // const sId = sonId ?? '';

  const goToPapa = () => {
    if (fatherId) {
      onPersonPress && onPersonPress(fatherId);
    }
  };

  const goToMama = () => {
    if (motherId) {
      onPersonPress && onPersonPress(motherId);
    }
  };

  const goToSon = () => {
    if (sonId) {
      onPersonPress && onPersonPress(sonId);
    }
  };

  return (
    <View style={styleSheet.relativeDataContainer}>
      <TouchableOpacity onPress={goToPapa}>
        <Text style={styleSheet.relativeDataTitle}>Father: {father}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToMama}>
        <Text style={styleSheet.relativeDataTitle}>Mother: {mother}</Text>
      </TouchableOpacity>
      {!!son && (
        <TouchableOpacity onPress={goToSon}>
          <Text style={styleSheet.relativeDataTitle}>Son: {son}</Text>
        </TouchableOpacity>
      )}
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
