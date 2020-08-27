import React from 'react';
import * as Style from './style';
import { Props, Item } from './types';
import { Product } from '../../types';

const Trail = (props: Props) => {
  const renderItem = ({ item }: { item: Product }) => {
    const imageUrl = item.images[0]?.url;
    return (
      <Style.Item>
        <Style.ImageContainer>
          {imageUrl && (
            <Style.Image source={{ uri: imageUrl }} resizeMode="cover" />
          )}
        </Style.ImageContainer>
        <Style.ItemFooter>
          <Style.ItemTitle numberOfLines={1}>
            {item.title || 'Título'}
          </Style.ItemTitle>
          <Style.ItemPriceContainer>
            {!!item.productVariants[1]?.price && (
              <Style.ItemPromo>
                R$ {item.productVariants[1]?.price || 'Promo'}
              </Style.ItemPromo>
            )}
            <Style.ItemPrice>
              R$ {item.productVariants[0]?.price || 'Value'}
            </Style.ItemPrice>
          </Style.ItemPriceContainer>
        </Style.ItemFooter>
      </Style.Item>
    );
  };

  if (props?.data?.length) {
    return (
      <Style.Container>
        <Style.Title>{props.title}</Style.Title>
        <Style.TrailContainer
          renderItem={renderItem}
          data={props.data}
          initialNumToRender={5}
          keyExtractor={(item: any, index: number) =>
            String(`${item.id}-${index}`)
          }
        />
      </Style.Container>
    );
  }

  return <></>;
};

export default Trail;
