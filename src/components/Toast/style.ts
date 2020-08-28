import styled from 'styled-components/native';
import { Animated, View, Text } from 'react-native';
import theme from '../../theme';
const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: ${theme.size.screenHeigth * 0.15}px;
  justify-content: flex-end;
  padding: 24px 16px;
`;

const Content = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled(View)`
  margin-right: 16px;
`;

const Message = styled(Text)`
  font-size: 20px;
  color: white;
`;

export { Container, Content, IconContainer, Message };
