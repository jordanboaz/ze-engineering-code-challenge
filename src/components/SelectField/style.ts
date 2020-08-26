import styled from 'styled-components/native';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import theme from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled(View)`
  flex: 1;
`;

const ScrollContainer = styled(FlatList).attrs({
  contentContainerStyle: { flexGrow: 1 },
})`
  /* background: white; */
`;

const Item = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${theme.colors.grey.one};
  margin-bottom: 1px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
  background: white;
`;

const IconContainer = styled(View)`
  width: 10%;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  height: 100%;
`;

const TextContainer = styled(View)`
  flex: 1;
`;

const Title = styled(Text)`
  font-weight: bold;
  color: ${theme.colors.grey.three};
`;

const Subtitle = styled(Text)`
  color: ${theme.colors.grey.three};
`;

export {
  Container,
  ScrollContainer,
  Item,
  IconContainer,
  TextContainer,
  Title,
  Subtitle,
};
