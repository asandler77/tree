import React from 'react';
import Person from './Person';
import { FlatList, StyleSheet, View } from 'react-native';

export default () => {
  const DATA = [
    {
      name: 'Vladimir',
      father: 'Ilia',
      mother: 'Maria',
    },
    {
      name: 'Ilia',
      child: 'Vladimir',
      wife: 'Maria',
    },
    {
      name: 'Maria',
      child: 'Vladimir',
      husband: 'Ilia',
    },
  ];
  return (
    <FlatList
      data={DATA}
      horizontal={true}
      renderItem={({ item }) => {
        return (
          <View>
            <Person name={item.name} />

          </View>
        );
      }}
    />
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
});
