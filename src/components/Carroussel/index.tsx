import React from 'react';
import {
  Container,
  ScrollContainer,
  DotsContainer,
  Dot,
  BoxContainer,
  ImageBox,
} from './style';
import { Props, Item } from './types';
import SquaredImage from '../../assets/splash.png';

const Carroussel = (props: Props) => {
  const renderItems = (data: Item[]) => {
    if (data.length) {
      return data.map((eachItem) => {
        return (
          <BoxContainer key={eachItem.id}>
            <ImageBox source={{ uri: eachItem.img }} />
          </BoxContainer>
        );
      });
    }

    return <></>;
  };

  const renderDotsContainer = () => {
    return (
      <DotsContainer>
        {props.data.map((eachDot) => (
          <Dot />
        ))}
      </DotsContainer>
    );
  };
  return (
    <Container>
      <ScrollContainer>{renderItems(props.data)}</ScrollContainer>
      {/* {renderDotsContainer()} */}
    </Container>
  );
};

export default Carroussel;
