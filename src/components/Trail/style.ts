import styled from 'styled-components/native';
import { View, Text, FlatList, Image as RNImage } from 'react-native';

import theme from '../../theme';

const ItemWidth = theme.size.screenWidth * 0.3;

export const Container = styled(View)`
  width: 100%;
  height: ${theme.size.screenHeigth * 0.4}px;
  padding: 20px 0 0 0;
  background: white;
`;

export const TrailContainer = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1, paddingVertical: 15, paddingRight: 20 },
})``;

export const Item = styled(View)`
  flex: 0;
  width: ${ItemWidth}px
  /* height: 100%; */
  margin-left: 20px;
  border-radius: 8px;
  /* overflow: hidden; */
  background: white;
  elevation: 3;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 3px; 
`;

export const Title = styled(Text)`
  margin-left: 20px;
  color: #888;
  font-size: 18px;
`;

export const ImageContainer = styled(View)`
  flex: 1;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f4;
  overflow: hidden;
`;

export const Image = styled(RNImage)`
  height: 100%;
  width: 100%;

  overflow: hidden;
`;

export const ItemFooter = styled(View)`
  padding: 4px 10px;
  height: 40%;
  justify-content: space-between;
`;

export const ItemTitle = styled(Text)`
  color: #888;
`;

export const ItemPriceContainer = styled(View)`
  justify-content: flex-end;
`;

export const ItemPromo = styled(Text)`
  color: #c4c4c4;
  text-decoration-line: line-through;
`;

export const ItemPrice = styled(Text)`
  color: #000;
  font-weight: bold;
`;
