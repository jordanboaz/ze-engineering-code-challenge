import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, View, Animated, Text } from 'react-native';
import { useLazyQuery, useQuery } from '@apollo/client';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {
  Container,
  Content,
  HeaderAbsolute,
  HeaderPaint,
  HeaderInfo,
  InfoContainer,
  InfoContent,
  BackArrowContainer,
  Label,
  AddressInfo,
  CartRow,
  CartButton,
  CartText,
  Divider,
  headerHeight,
} from './style';
import { useSelector } from 'react-redux';
import { Poc, Product, ProductVariants, Category } from '../../types';
import { searchAddress } from '../../services/searchAddressService';
import { categories } from '../../services/categoriesService';
import { getPoc } from '../../services/pocService';
import Carroussel from '../../components/Carroussel';
import FilterComponent from '../../components/Grid';
import Trail from '../../components/Trail';
import SearchBar from '../../components/SearchBar';
import { Props } from './types';
import theme from '../../theme';
const mockCarroussel = [
  {
    id: 1,
    img:
      'https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg',
  },
  {
    id: 2,
    img:
      'https://i1.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2017/07/iStock-516799356.jpg?fit=1254%2C836&ssl=1',
  },
  {
    id: 3,
    img:
      'https://es1-ladleandspricell.netdna-ssl.com/wp-content/uploads/2014/01/blue-margarita-680.jpg',
  },
  {
    id: 4,
    img:
      'https://www.thespruceeats.com/thmb/OevcAqV-nURBs51XZpzg5gVp5rE=/3870x2580/filters:fill(auto,1)/vodka-martini-recipe-760983-Hero-5bd771cd4cedfd0026121758.jpg',
  },
];

const Home = (props: Props) => {
  const [searchProduct, setSearchProduct] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [trailsList, setTrailsList] = useState<
    { title: string; products: Product[] }[] | never
  >([]);
  const cart = useSelector((state) => state.cart);

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

  // console.log('got address', dataAddress, loadingAddress);
  // console.log('got id', loadingPoc, pocData);

  useEffect(() => {
    const { location, subtitle } = props.route.params.address;
    setCurrentLocation(subtitle);
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
    if (!loadingAddress && dataAddress && dataAddress?.pocSearch.length) {
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
    props.navigation.navigate('Details', { product: product });
  };

  const navigateToCart = () => {
    props.navigation.navigate('Cart');
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
      <HeaderAbsolute
        style={{
          height: scrollAnimated.interpolate({
            inputRange: [0, theme.size.screenHeigth * 0.2],
            outputRange: [headerHeight, theme.size.screenHeigth * 0.08],
            extrapolate: 'clamp',
          }),
        }}
      >
        <HeaderPaint
          style={{
            opacity: scrollAnimated.interpolate({
              inputRange: [0, theme.size.screenHeigth * 0.2],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        />

        {/* <View style={{ padding: 16, paddingTop: 32 }}> */}
        <HeaderInfo>
          <InfoContainer
            style={{
              opacity: scrollAnimated.interpolate({
                inputRange: [0, theme.size.screenHeigth * 0.2],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
              height: scrollAnimated.interpolate({
                inputRange: [0, theme.size.screenHeigth * 0.2],
                outputRange: [50, 0],
                extrapolate: 'clamp',
              }),
            }}
          >
            <InfoContent>
              <Label>Receber agora em:</Label>
              <AddressInfo numberOfLines={1}>{currentLocation}</AddressInfo>
            </InfoContent>
            <BackArrowContainer onPress={props.navigation.goBack}>
              <AntDesign name="down" size={24} color="white" />
            </BackArrowContainer>
          </InfoContainer>

          <SearchBar
            icon={() => <Ionicons name="ios-search" size={24} color="black" />}
            placeholder="Filtrar por produto"
            value={searchProduct}
            onChangeText={setSearchProduct}
          />
        </HeaderInfo>
        {/* </View> */}
      </HeaderAbsolute>
      <Content onScroll={onScroll} scrollEventThrottle={16}>
        <Carroussel data={mockCarroussel} />

        <Divider />

        <FilterComponent
          data={loadingCategories ? [] : dataCategories.allCategory}
          numColumns={2}
        />
        <Divider />
        {renderTrailsList()}
      </Content>
      {cart?.products?.length > 0 && (
        <CartRow>
          <CartButton onPress={navigateToCart}>
            <AntDesign name="shoppingcart" size={24} color="black" />
            <CartText>{`${cart.products.reduce(
              (acc: number, cur) => acc + cur.amount,
              0
            )} itens no carrinho`}</CartText>
          </CartButton>
        </CartRow>
      )}
    </Container>
  );
};

export default Home;
