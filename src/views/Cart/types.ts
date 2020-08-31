import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

export interface Props {
  navigation: HomeScreenNavigationProp;
}
