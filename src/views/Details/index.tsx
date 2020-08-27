import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ProductControl from '../../components/ProductControl';
import ProductViewer from '../../components/ProductViewer';

const Presentation = () => {

  const onSubmit = (x: any) => {
    console.log(x);
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>Details Screen</Text>
      <ProductViewer 
      url={'https://www.extremetech.com/wp-content/uploads/2020/01/NASA-Sun.jpg'
      }
      />
      <ProductControl  
      units={[6, 12, 24]}
      price={2.79}
      onSubmit={onSubmit}
      />
    </ScrollView>
  );
};

export default Presentation;
