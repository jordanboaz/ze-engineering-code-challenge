import React, { useState} from 'react';
import {
  Container,
 Figure

} from './style';
import { Props } from './types';


const ProductView = (props: Props) => {

  return <Container>
    {props.url? <Figure resizeMode="cover" source={{ uri: props.url}} /> : <></>}
  </Container>

}

export default ProductView;