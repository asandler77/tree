import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import Carousel from './Carousel';
import { DATA } from '../data/data';

export default (): ReactElement => {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>Ulianov family</Text>
      <Carousel personData={DATA} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
});
