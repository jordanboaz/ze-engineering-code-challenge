import React from 'react';
import { View, Text } from 'react-native';
import { useLazyQuery, useQuery } from '@apollo/client';
import { searchAddress } from '../../services/searchAddressService';
import { categories } from '../../services/categoriesService';
import { getPoc } from '../../services/pocService';
import Carroussel from '../../components/Carroussel';
import Grid from '../../components/Grid';
import Trail from '../../components/Trail';
const options = [
  {title: 'Ficção'},
  {title: 'Comédia'},
  {title: 'Ajuda'},
  {title: 'Informática'},
  {title: 'Direito'},
  {title: 'Economia'},
];
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

  const { loading: loadingAddress, error: errorAddress, data: addresspocData } = useQuery(
    searchAddress,
    {
      variables: {
        algorithm: "NEAREST",
lat: "-23.632919",
  long: "-46.699453",
  now: "2017-08-01T20:00:00.000Z"
      },
    }
  );

  // console.log(loadingPoc, errorPoc, pocData);

  // console.log(loadingCategories, errorCategories, categoriesData);
  // console.log(loadingAddress, errorAddress, addresspocData);

  return (
    <View style={{ flex: 1,  }}>

{/* <Carroussel data={[1, 2, 3, 4, 5]} /> */}


<Grid data={categoriesData? categoriesData.allCategory : []} numColumns={2} />

<Trail
  title="Ficção"
  data={pocData.poc.products}
/>    
</View>
  );
};

export default Home;
