import { gql } from '@apollo/client';

const searchAddress = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      officialName
    }
  }
`;

export { searchAddress };
