import React from 'react';
import { GridContainer, Row, Item, IconContainer, Title } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Props, Item as ItemType } from './types';
import theme from '../../theme';

const Grid = (props: Props) => {
  const renderItems = (data: ItemType[]) => {
    if (data.length) {
      const groupedItems: ItemType[][] = groupArrayBy(data, props.numColumns);
      return groupedItems.map((eachRow, rowindex: number) => {
        return (
          <Row key={rowindex}>
            {eachRow.map((eachItem, itemIndex) => {
              return (
                <Item index={itemIndex} key={itemIndex}>
                  {renderIcon(eachItem.title)}
                  <Title>{eachItem.title}</Title>
                </Item>
              );
            })}
          </Row>
        );
      });
    }

    return <></>;
  };

  const groupArrayBy = (data: any[], groupSize: number) => {
    return data.reduce((acc: any[], cur: any) => {
      const lastIndex = acc && acc.length ? acc.length : 0;
      if (lastIndex === 0) {
        return [[cur]];
      }

      if (acc[lastIndex - 1].length % groupSize !== 0) {
        acc[lastIndex - 1] = [...acc[lastIndex - 1], cur];
      } else {
        acc = [...acc, [cur]];
      }

      return acc;
    }, []);
  };

  const renderIcon = (icon: ItemType['icon']) => {
    let iconToRender = <></>;
    switch (icon) {
      case 'Cervejas':
        iconToRender = (
          <Ionicons
            name="ios-beer"
            size={24}
            color={theme.colors.yellow.zero}
          />
        );
        break;
      case 'Vinhos':
        iconToRender = (
          <Ionicons
            name="ios-wine"
            size={24}
            color={theme.colors.yellow.zero}
          />
        );
        break;
      case 'Sem álcool':
        iconToRender = (
          <Ionicons
            name="ios-beaker"
            size={24}
            color={theme.colors.yellow.zero}
          />
        );
        break;
      case 'Destilados':
        iconToRender = (
          <Ionicons
            name="ios-flame"
            size={24}
            color={theme.colors.yellow.zero}
          />
        );
        break;
      case 'Outros':
        iconToRender = (
          <Ionicons
            name="ios-help-circle"
            size={24}
            color={theme.colors.yellow.zero}
          />
        );
      case 'Petiscos':
        iconToRender = (
          <Ionicons
            name="ios-pizza"
            size={24}
            color={theme.colors.yellow.zero}
          />
        );
        break;
    }
    return <IconContainer>{iconToRender}</IconContainer>;
  };

  return <GridContainer>{renderItems(props.data)}</GridContainer>;
};

export default Grid;
