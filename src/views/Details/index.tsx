import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { showToast } from '../../store/actions/toast';
import ProductControl from '../../components/ProductControl';
import ProductViewer from '../../components/ProductViewer';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/actions/cart';
import { Props } from './types';
import { Product } from '../../types';
import theme from '../../theme';
import {
  Container,
  HeaderContainer,
  HeaderButton,
  LabelContainer,
  LabelText,
  TitleContainer,
  Title,
  BigTitle,
  QuantityInfo,
  Quantity,
} from './style';

const Details = (props: Props) => {
  const [product] = useState<Product>(props.route.params.product);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onSubmit = (amount: any) => {
    const productToAdd = {
      amount,
      id: product.id,
      title: product.title,
      image: product.images[0].url,
    };
    dispatch(addProduct(productToAdd));
    dispatch(
      showToast({ message: 'Produto adicionado com sucesso', icon: 'success' })
    );
  };

  const renderQuantity = () => {
    const productInCart = cart.products.find((p) => p.id === product.id);
    if (productInCart) {
      return (
        <QuantityInfo>
          <Quantity>{`${productInCart.amount} no seu carrinho`}</Quantity>
        </QuantityInfo>
      );
    }
    return <></>;
  };
  return (
    <Container>
      <HeaderContainer>
        <HeaderButton onPress={props.navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </HeaderButton>
        <LabelContainer>
          <FontAwesome5
            name="snowflake"
            size={18}
            color={theme.colors.blue.zero}
          />
          <LabelText>GELADA</LabelText>
        </LabelContainer>
      </HeaderContainer>
      <ProductViewer url={product.images[0].url} />
      <TitleContainer>
        <Title>{product.title}</Title>
        <BigTitle>R$ {product.productVariants[0].price}</BigTitle>
      </TitleContainer>
      <ProductControl
        units={[6, 12]}
        price={product.productVariants[0].price}
        onSubmit={onSubmit}
      />

      {renderQuantity()}
    </Container>
  );
};

export default Details;
