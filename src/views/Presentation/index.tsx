import React, { useState, useCallback } from 'react';
import { Animated } from 'react-native';
import {
  Container,
  SearchBarContainer,
  IconContainer,
  SearchBar,
} from './style';
import { Geocoder } from '../../services/geoCoderservice';
import theme from '../../theme';
import SelectField from '../../components/SelectField';
import { Item as addressType } from '../../components/SelectField/types';
import throttle from 'lodash.throttle';

const Presentation = () => {
  const [searchField, setSearchField] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [errorFetching, setErrorFetching] = useState(false);
  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);

  const headerAnimation = new Animated.Value(0);

  const onSearch = async (term: string) => {
    try {
      const { results } = await Geocoder.from(term);
      setErrorFetching(false);
      const extractAddresses = results.map((el: any) => {
        return {
          id: el.place_id,
          title:
            el.address_components.find((address_fields: any) =>
              address_fields.types.includes('route')
            ).short_name || el.formatted_address,
          subtitle: el.formatted_address,
          location: el.geometry.location,
        };
      });

      setAddresses(extractAddresses);
    } catch (error) {
      setErrorFetching(true);
      // console.warn(error);
    }
  };

  const throttledSearch = useCallback(
    throttle(onSearch, 3000, { leading: true, trailing: true }),
    []
  );

  const animateHeaderToTop = () => {
    if (!hasAnimatedHeader) {
      Animated.timing(headerAnimation, {
        duration: 500,
        toValue: 1,
        useNativeDriver: true,
      }).start(() => {
        setHasAnimatedHeader(true);
      });
    }
  };

  const onChangeSearch = (searchTerm: string) => {
    setSearchField(searchTerm);
    if (searchTerm.length > 3) {
      throttledSearch(searchTerm);
    }
  };

  const onSelectAddress = (adressSelected: addressType) => {
    console.log(adressSelected);
  };

  return (
    <Container>
      <SearchBarContainer
        style={{
          transform: [
            {
              translateY: headerAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [(theme.size.screenHeigth / 3), 0],
              }),
            },
          ],
        }}
      >
        <IconContainer>
          <></>
        </IconContainer>
        <SearchBar
          value={searchField}
          placeholder="Inserir endereço com número"
          onFocus={animateHeaderToTop}
          onChangeText={onChangeSearch}
        />
      </SearchBarContainer>
      <SelectField data={addresses} onPress={onSelectAddress} />
    </Container>
  );
};

export default Presentation;
