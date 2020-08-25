import { gql } from '@apollo/client';

const categories = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

export { categories };
