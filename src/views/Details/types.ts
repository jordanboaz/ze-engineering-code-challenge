import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export interface Props {
  navigation: DetailsScreenNavigationProp;
  route: any;
}
