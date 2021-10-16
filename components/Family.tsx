import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import Carousel from './Carousel';
import Person from './Person';

export default (): ReactElement => {
  const DATA = [
    {
      name: 'Vladimir',
      sureName: 'Ulianov',
      father: 'Ilia',
      mother: 'Maria',
      imageUri: 'https://www.biography.com/.image/t_share/MTIwNjA4NjMzODgyNTEwODYw/vladimir-lenin-9379007-1-402.jpg',
    },
    {
      name: 'Ilia',
      sureName: 'Ulianov',
      father: 'Alexander',
      mother: 'Anna',
      child: 'Vladimir',
      wife: 'Maria',
      imageUri: 'https://avatars.mds.yandex.net/get-zen_doc/195350/pub_5b2cfb51c2fba000aa1dddbe_5b2d0683e5a60f00a800480f/scale_1200',
    },
    {
      name: 'Maria',
      sureName: 'Ulianov',
      father: 'Evgeny',
      other: 'Katya',
      child: 'Vladimir',
      husband: 'Ilia',
      imageUri: 'https://photos.geni.com/p12/6b/84/20/6c/534448388c483d59/mab_original.jpg',
    },
  ];
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>Ulianov family</Text>
      <Carousel personData={DATA} />
      {/*<Person name={DATA[0].name} father={DATA[0].father} mother={DATA[0].mother} imageUri={DATA[0].imageUri} />*/}
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
  title:{
    fontSize: 40,

  }
});
