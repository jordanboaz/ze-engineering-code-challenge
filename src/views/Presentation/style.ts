import styled from 'styled-components/native';
import { ScrollView, View, Image, Animated } from 'react-native';
import theme from '../../theme';

const Container = styled(View).attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 32px 16px;
  /* background: ${theme.colors.grey.zero}; */
  background: white;
`;

const Logo = styled(Animated.Image)`
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
`;
const Content = styled(View)``;

export { Container, Logo, Content };
