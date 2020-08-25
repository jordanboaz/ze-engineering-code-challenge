import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Geocoder } from '../../services/geoCoderservice';
import { assertDirective } from 'graphql';

const Presentation = (props) => {
  const [searchField, setSearchField] = useState('');

  //   Geocoder.from('Colosseum')
  //   .then((json) => {
  //     var location = json.results[0].geometry.location;
  //     console.log(location);
  //   })
  //   .catch((error) => console.warn(error));

  // Geocoder.from(41.89, 12.49)
  //   .then((json) => {
  //     var addressComponent = json.results[0].address_components[0];
  //     console.log(addressComponent);
  //   })
  //   .catch((error) => console.warn(error));

  const onSearch = async () => {
    console.log(searchField);

    try {
      const { results } = await Geocoder.from(searchField);
      const firstLocation = results[0]?.geometry?.location;
      console.log(firstLocation);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Presentation Screen</Text>
      <Text onPress={() => props.navigation.navigate('Home')}>Home Screen</Text>
      <TextInput
        style={{ backgroundColor: 'red' }}
        value={searchField}
        onChangeText={setSearchField}
      />
      <TouchableOpacity onPress={onSearch}>
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Presentation;
