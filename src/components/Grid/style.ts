import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

const GridContainer = styled(View)`
  width: ${theme.size.screenWidth}px;
  height: ${theme.size.screenHeigth * 0.25}px;
  background: white;
  padding: 4px 0 12px;
`;

const Row = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 20px 0;
`;

const Item = styled(TouchableOpacity)<{ index: number }>`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 4px;
  flex: 1;
  height: 100%;
  background: white;
  margin: ${({ index }) => {
    const left = index % 2 === 0;

    if (left) {
      return '0px 6px 0px 0px';
    } else {
      return '0px 0px 0px 6px';
    }
  }};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 2;
`;

const IconContainer = styled(View)`
  margin: 0 10px 0 20px;
`;

// const IconPlaceHolder = styled(BookSvg).attrs({
//   fill: '#000',
//   width: 15,
//   height: 15,
// })``;

const Title = styled(Text)``;

export { GridContainer, Row, Item, IconContainer, Title };
