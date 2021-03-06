import { gql } from '@apollo/client';

const getPoc = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
          title
          subtitle
        }
      }
    }
  }
`;

export { getPoc };
