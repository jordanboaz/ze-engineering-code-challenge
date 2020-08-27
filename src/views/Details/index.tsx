import React from 'react';
import { Text, View } from 'react-native';
import ProductControl from '../../components/ProductControl';

const Presentation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Details Screen</Text>
      <ProductControl  
      units={[6, 12, 24]}
      price={2.79}
      />
    </View>
  );
};

export default Presentation;
