import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
export interface Props {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  animation?: any;
  icon?: Function;
}
