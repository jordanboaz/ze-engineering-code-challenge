import Geocoder from 'react-native-geocoding';
import getEnvVars from '../../env';

const { mapsApiKey } = getEnvVars();
// Initialize the module (needs to be done only once)
Geocoder.init(mapsApiKey, {
  language: 'pt-BR',
  region: 'br',
}); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

export { Geocoder };
