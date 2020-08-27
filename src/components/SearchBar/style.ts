import styled from 'styled-components/native';
import { Animated, View, Text, TextInput, SafeAreaView } from 'react-native';
import theme from '../../theme';

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
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

const SearchBar = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.grey.three};
`;

const IconContainer = styled(View)`
  width: 10%;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  height: 100%;
`;

export { SearchBar, SearchBarContainer, IconContainer };
