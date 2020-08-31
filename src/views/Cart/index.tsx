import React, { useState, useCallback } from 'react';
import { Container, HeaderButton, HeaderContainer, Title } from './style';
import { AntDesign } from '@expo/vector-icons';
import { Props } from './types';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/List';
const Cart = (props: Props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <Container>
      <HeaderContainer>
        <HeaderButton onPress={props.navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </HeaderButton>
      </HeaderContainer>
      <Title>Seu carrinho</Title>
      <ProductList data={cart.products} />
    </Container>
  );
};

export default Cart;
