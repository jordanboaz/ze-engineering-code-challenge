import styled from 'styled-components/native';
import { View, Text, ScrollView, Image } from 'react-native';

import theme from '../../theme';

const Container = styled(View)`
  height: ${theme.size.screenHeigth * 0.4}px;
`;

const ScrollContainer = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  snapToInterval: theme.size.screenWidth,
  decelerationRate: 'fast',
  contentContainerStyle: { flexGrow: 1 },
})``;

const DotsContainer = styled(View)`
  background: red;
  position: absolute;
  top: 80%;
  left: 50%;
  margin-left: -25%;
  width: 200px;
  height: 10%;
  z-index: 5;
`;

const Dot = styled(View)``;

const BoxContainer = styled(View)`
  width: ${theme.size.screenWidth}px;
  padding: 20px;
  background: white;
`;

const ImageBox = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export {
  Container,
  ScrollContainer,
  DotsContainer,
  Dot,
  BoxContainer,
  ImageBox,
};
