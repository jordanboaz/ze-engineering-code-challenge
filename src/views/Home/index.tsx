import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, View, Animated } from 'react-native';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  Container,
  Content,
  HeaderAbsolute,
  HeaderPaint,
  Divider,
} from './style';
import Constants from 'expo-constants';
import { Poc, Product, ProductVariants, Category } from '../../types';
import { searchAddress } from '../../services/searchAddressService';
import { categories } from '../../services/categoriesService';
import { getPoc } from '../../services/pocService';
import Carroussel from '../../components/Carroussel';
import FilterComponent from '../../components/Grid';
import Trail from '../../components/Trail';
import SearchBar from '../../components/SearchBar';
import { Props } from './types';
import Splash from '../../assets/splash.png';
import theme from '../../theme';
const mockCarroussel = [
  { id: 1, img: Splash },
  { id: 2, img: Splash },
  { id: 3, img: Splash },
  { id: 4, img: Splash },
];

const Home = (props: Props) => {
  const [searchProduct, setSearchProduct] = useState('');
  const [trailsList, setTrailsList] = useState<
    { title: string; products: Product[] }[] | never
  >([]);

  const scrollAnimated = new Animated.Value(0);

  const {
    loading: loadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery(categories);

  const [
    getAddress,
    { loading: loadingAddress, data: dataAddress },
  ] = useLazyQuery(searchAddress);

  const [getPOCID, { loading: loadingPoc, data: pocData }] = useLazyQuery(
    getPoc
  );

  console.log('got address', dataAddress, loadingAddress);
  // console.log('got id', loadingPoc, pocData);

  useEffect(() => {
    const { location } = props.route.params.address;

    getAddress({
      variables: {
        algorithm: 'NEAREST',
        lat: String(location.lat),
        long: String(location.lng),
        now: new Date().toISOString(),
      },
    });
  }, []);

  useEffect(() => {
    if (!loadingAddress && dataAddress && dataAddress?.pocSearch) {
      getPOCID({
        variables: {
          id: dataAddress.pocSearch[0].id,
          search: '',
          categoryId: null,
        },
      });
    }
  }, [dataAddress, loadingAddress]);

  useEffect(() => {
    arrangeProductsInCategories();
  }, [pocData, dataCategories]);

  const arrangeProductsInCategories = useCallback(() => {
    /** TODO not performante. Best way to organize this should be by iterating 
    over products and creating categories as I find them. But this should be fine for now... **/
    if (dataCategories?.allCategory?.length && pocData?.poc?.products?.length) {
      const categoriesWithProducts = dataCategories.allCategory.reduce(
        (acc: Category[], cur: Category) => {
          const productsOfCategory: Product[] = pocData.poc.products.filter(
            (product: Product) => {
              const categoriesOfCurrentProduct = product.productVariants.map(
                (variants) => variants.subtitle
              );
              return categoriesOfCurrentProduct.includes(cur.title);
            }
          );

          const newAcc = [
            ...acc,
            { title: cur.title, products: productsOfCategory },
          ];
          return newAcc;
        },
        []
      );

      setTrailsList(categoriesWithProducts);
    }
  }, [pocData, dataCategories]);

  // console.log(loadingCategories, errorCategories, categoriesData);
  // console.log(loadingAddress, errorAddress, addresspocData);

  const onSelectProduct = (product: Product) => {
    props.navigation.navigate('Details');
    console.log('selected', product);
  };

  const renderTrailsList = () => {
    return trailsList.map((eachTrail) => {
      return (
        <Trail
          title={eachTrail.title}
          key={eachTrail.title}
          data={eachTrail.products}
          onPress={onSelectProduct}
          footer={() => <Divider />}
        />
      );
    });
  };

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollAnimated } } }],
    { useNativeDriver: false }
  );

  return (
    <Container>
      <HeaderAbsolute>
        <HeaderPaint
          style={{
            opacity: scrollAnimated.interpolate({
              inputRange: [0, theme.size.screenHeigth * 0.1],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        />
        <View style={{ padding: 16, paddingTop: 32 }}>
          <SearchBar value={searchProduct} onChangeText={setSearchProduct} />
        </View>
      </HeaderAbsolute>
      <Content onScroll={onScroll}>
        <Carroussel data={mockCarroussel} />

        <Divider />

        <FilterComponent
          data={loadingCategories ? [] : dataCategories.allCategory}
          numColumns={2}
        />
        <Divider />
        {renderTrailsList()}
      </Content>
    </Container>
  );
};

export default Home;
