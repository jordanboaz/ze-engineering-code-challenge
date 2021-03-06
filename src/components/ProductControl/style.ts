import styled from 'styled-components/native';
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import theme from '../../theme';

const Container = styled(View)`
  min-height: ${theme.size.screenHeigth * 0.15}px;
  width: 100%;
  flex-direction: column;
  background: white;
  padding: 0 16px;
`;

const UnitsControlContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: -20px;
`;

const Unit = styled(TouchableOpacity)`
  border-radius: 4px;
  height: 30px;
  flex: 0.3;
  margin: 0 20px 0 0;
  align-items: center;
  justify-content: center;
  border-color: ${theme.colors.grey.one};
  border-width: 1px;
`;

const UnitText = styled(Text)``;

const SubmitButton = styled(TouchableOpacity)`
  /* flex: 1; */
  width: 100%;
  height: 40px;
    flex-direction: row
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.yellow.zero};
    padding: 0 16px;
    border-radius: 100px;
  `;

const SubmitText = styled(Text)``;

export {
  Container,
  UnitsControlContainer,
  Unit,
  UnitText,
  SubmitButton,
  SubmitText,
};
