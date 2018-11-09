import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        productVariants{
          title
          description
          imageUrl
          price
        }
      }
    }
  }
`;

export const CATERORIES_QUERY = gql`
  query allCategoriesSearch {
    allCategory{
      title
      id
    }
  }
`;
