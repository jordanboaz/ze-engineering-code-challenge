import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import theme from '../../theme';

const Container = styled(View)`
  height: ${theme.size.screenHeigth * 0.4}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: white;
  border-color: ${theme.colors.grey.zero};
  border-bottom-width: 1px;
`;
const Figure = styled(Image)`
  width: 100%;
  height: 100%;
`;

export { Container, Figure };
