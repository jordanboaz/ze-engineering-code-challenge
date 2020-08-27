import styled from 'styled-components/native';
import { View, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../theme';

const headerHeight = theme.size.screenHeigth * 0.1;

const Container = styled(View)`
  flex: 1;
`;

const HeaderAbsolute = styled(View)`
  position: absolute;
  width: 100%;
  height: ${headerHeight}px;
  top: 0;
  left: 0;
  z-index: 5;
  align-items: center;
  justify-content: center;
`;

const HeaderPaint = styled(Animated.View)`
  background: black;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 1;
`;

const Content = styled(ScrollView).attrs({
  contentContainerStyle: { paddingTop: headerHeight },
  showsVerticalScrollIndicator: false,
})``;

const Divider = styled(View)`
  width: 100%;
  height: 15px;
`;

export { Container, HeaderAbsolute, HeaderPaint, Content, Divider };
