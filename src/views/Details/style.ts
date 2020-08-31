import styled from 'styled-components/native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../../theme';

const Container = styled(ScrollView).attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
})`
  background: white;
  flex: 1;
`;

const HeaderContainer = styled(View)`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderButton = styled(TouchableOpacity)``;

const LabelContainer = styled(View)`
  background: ${theme.colors.blue.one};
  padding: 4px 16px;
  flex-direction: row;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled(Text)`
  margin-left: 4px;
  color: ${theme.colors.blue.zero};
`;

const TitleContainer = styled(View)`
  padding: 16px 16px 0;
`;

const Title = styled(Text)`
  font-size: 14px;
`;

const BigTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const QuantityInfo = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Quantity = styled(Text)`
  color: ${theme.colors.grey.three};
`;

export {
  Container,
  HeaderContainer,
  HeaderButton,
  LabelContainer,
  LabelText,
  TitleContainer,
  Title,
  BigTitle,
  QuantityInfo,
  Quantity,
};
