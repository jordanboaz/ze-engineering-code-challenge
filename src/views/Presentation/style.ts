import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';
import theme from '../../theme';

const Container = styled(View)`
  flex: 1;
  padding: 32px 16px;
  /* background: ${theme.colors.grey.zero}; */
  background: white;
`;

const Content = styled(View)``;

export { Container, Content };
