import React from 'react';
import { GridContainer, Row, Item, IconContainer, Title } from './style';
import { Props, Item as ItemType } from './types';

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
                  {renderIcon(eachItem.icon)}
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
    const iconToRender = icon ? <></> : <></>;
    return <IconContainer>{iconToRender}</IconContainer>;
  };

  return <GridContainer>{renderItems(props.data)}</GridContainer>;
};

export default Grid;
