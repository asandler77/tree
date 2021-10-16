import React, { useRef } from 'react';
import Person from './Person';
import { FlatList, View } from 'react-native';
import { PersonalData } from './types';

interface Props {
  personData: PersonalData[];
}
export default ({ personData }: Props) => {
  // type never
  console.log('personData1', personData);
  const refContainer = useRef<any>(null);
  const onPress = (personId: string) => {
    refContainer.current?.scrollToIndex({ animated: true, index: personId });
  };
  return (
    <FlatList
      ref={refContainer}
      data={personData}
      horizontal={true}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => {
        return (
          <View>
            <Person
              id={item.id}
              name={item.name}
              sureName={item.sureName}
              imageUri={item.imageUri}
              mother={item.mother}
              father={item.father}
              child={item.child}
              husband={item.husband}
              wife={item.wife}
              fatherId={item.fatherId}
              onPersonPress={onPress}
            />
          </View>
        );
      }}
    />
  );
};
