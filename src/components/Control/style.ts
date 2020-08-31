import styled from 'styled-components/native';
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import theme from '../../theme';

const ControlsContainer = styled(View)`
  flex-direction: row;
  flex: 1;
  margin: 0 20px 0 0;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  height: 30px;
  border-color: ${theme.colors.grey.one};
  border-width: 1px;
  background: white;
`;

const ControlButton = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ControlLabel = styled(Text)`
  font-size: 16px;
`;

const ControlValue = styled(TextInput)`
  flex: 1;
  text-align: center;
`;

export { ControlsContainer, ControlButton, ControlLabel, ControlValue };
