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
      <Item onPress={() => props.onPress(item)}>
        <IconContainer>
          <></>
        </IconContainer>
        <TextContainer>
          <Title numberOfLines={1}>{item.title}</Title>
          <Subtitle numberOfLines={1}>{item.subtitle}</Subtitle>
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
          keyExtractor={(item: unknown) => String(item.id)}
        />
      </Container>
    );
  }

  return <></>;
};

export default SelectField;
