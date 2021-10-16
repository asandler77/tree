import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import Carousel from './Carousel';
import Person from './Person';

export default (): ReactElement => {
  return (
    <View style={styleSheet.container}>
      <Person name={'Vladimir'} imageUri={'https://www.biography.com/.image/t_share/MTIwNjA4NjMzODgyNTEwODYw/vladimir-lenin-9379007-1-402.jpg'} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
