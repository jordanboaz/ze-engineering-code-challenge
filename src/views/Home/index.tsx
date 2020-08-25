import React from 'react';
import { View, Text } from 'react-native';
import { useLazyQuery, useQuery } from '@apollo/client';
import { searchAddress } from '../../services/searchAddressService';
import { categories } from '../../services/categoriesService';
import { getPoc } from '../../services/pocService';

const Home = () => {
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: categoriesData,
  } = useQuery(categories);

  const { loading: loadingPoc, error: errorPoc, data: pocData } = useQuery(
    getPoc,
    {
      variables: {
        id: '532',
        search: '',
        categoryId: null,
      },
    }
  );

  // console.log(loadingPoc, errorPoc, pocData);

  // console.log(loadingCategories, errorCategories, categoriesData);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
