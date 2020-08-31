import styled from 'styled-components/native';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

const Container = styled(ScrollView).attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})`
  width: 100%;
  background: white;
`;

const HeaderContainer = styled(View)`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderButton = styled(TouchableOpacity)``;

const Title = styled(Text)`
  color: ${theme.colors.grey.two}
  /* text-align: center; */
  margin: 8px 0 0 16px;
`;

export { Container, HeaderContainer, HeaderButton, Title };
