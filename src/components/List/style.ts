import styled from 'styled-components/native';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

const Container = styled(View)`
  height: ${theme.size.screenHeigth * 0.4}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: red;
  border-color: ${theme.colors.grey.zero};
  border-bottom-width: 1px;
`;

const ListScroll = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 16 },
})`
  background: white;
  width: 100%;
`;

const Item = styled(View)`
  width: 100%;
  height: 90px;
  padding: 8px;
  background: white;
  border-radius: 8px;
  elevation: 3;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Figure = styled(Image)`
  width: 20%;
  height: 100%;
`;

const InfoContainer = styled(View)`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled(Text)`
  font-size: 12px;
  color: ${theme.colors.grey.two};
`;

const Price = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin: 4px 0;
`;

const Button = styled(TouchableOpacity)``;

export {
  Container,
  Figure,
  ListScroll,
  Item,
  InfoContainer,
  Title,
  Price,
  Button,
};
