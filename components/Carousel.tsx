import React from 'react';
import Person from './Person';
import { FlatList, StyleSheet, View } from 'react-native';
import { PersonType } from './types';

interface Props {
  personData: PersonType[];
}
export default ({ personData }: Props) => {
  return (
    <FlatList
      data={personData}
      horizontal={true}
      renderItem={({ item }) => {
        return (
          <View>
            <Person name={item.name} sureName={item.sureName} imageUri={item.imageUri} mother={item.mother} father={item.father} child={item.child} husband={item.husband} wife={item.wife} />
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
