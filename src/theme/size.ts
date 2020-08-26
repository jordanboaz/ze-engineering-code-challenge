import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeigth = width > height ? width : height;

export {screenHeigth, screenWidth};
