import styled from 'styled-components/native';
import { Animated, View, Text, TextInput, SafeAreaView } from 'react-native';
import theme from '../../theme';

const Container = styled(View)`
  flex: 1;
  padding: 32px 16px;
  /* background: ${theme.colors.grey.zero}; */
  background: white;
`;

const SearchBarContainer = styled(Animated.View)`
  width: 100%;
  z-index: 5;
  height: 50px;
  border-radius: 8px;
  background: white;
  justify-content: center;
  flex-direction: row;
  padding: 8px;
  margin-bottom: 20px;
  elevation: 3;
`;

const IconContainer = styled(View)`
  width: 10%;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  height: 100%;
`;

const SearchBar = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.grey.three};
`;

const Content = styled(View)``;

export { Container, SearchBarContainer, IconContainer, SearchBar, Content };
