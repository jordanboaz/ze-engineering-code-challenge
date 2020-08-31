import React, { useState, useCallback } from 'react';
import {
  Container,
  ListScroll,
  Item,
  Figure,
  InfoContainer,
  Title,
  Price,
  Button,
} from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Props } from './types';
import Control from '../Control';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../theme';
import {
  increaseAmount,
  decreaseAmount,
  removeProduct,
} from '../../store/actions/cart';
const List = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const onPropsIncrease = (item) => {
    dispatch(increaseAmount(item.id));
  };

  const onPropsDecrease = (item) => {
    dispatch(decreaseAmount(item.id));
  };

  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <Item key={item.id}>
          <Figure source={{ uri: item.image }} />
          <InfoContainer>
            <Title>{item.title}</Title>
            <Price>R$ {item.price}</Price>
            <Control
              onPropsIncrease={() => onPropsIncrease(item)}
              onPropsDecrease={() => onPropsDecrease(item)}
              onChangeValue={() => {}}
              unit={item.amount}
            />
          </InfoContainer>
          <Button onPress={() => dispatch(removeProduct(item.id))}>
            <FontAwesome5
              name="trash"
              size={20}
              color={theme.colors.grey.two}
            />
          </Button>
        </Item>
      );
    });
  };

  return (
    // <Container>
    <ListScroll>{renderItems(props.data)}</ListScroll>
    // </Container>
  );
};

export default List;
