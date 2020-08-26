export interface Item {
  id: string;
  title: string;
  subtitle?: string;
  location: Location;
}

interface Location {
  lat: number;
  lng: number;
}

export interface Props {
  data: Item[];
  onPress: Function;
}
