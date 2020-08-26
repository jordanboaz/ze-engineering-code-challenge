import React from 'react';
import {
  Container,
  ScrollContainer,
  Item,
  IconContainer,
  TextContainer,
  Title,
  Subtitle,
} from './style';
import { Props, Item as ItemType } from './types';

const SelectField = (props: Props) => {
  const renderItem = ({ item }: { item: ItemType }) => {
    return (
      <Item>
        <IconContainer>
          <></>
        </IconContainer>
        <TextContainer>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </TextContainer>
      </Item>
    );
  };

  if (props.data && props.data.length > 0) {
    return (
      <Container>
        <ScrollContainer
          renderItem={renderItem}
          data={props.data}
          keyExtractor={(item: unknown) => String(item.title)}
        />
      </Container>
    );
  }

  return <></>;
};

export default SelectField;
