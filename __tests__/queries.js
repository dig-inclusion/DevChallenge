const gql = require("graphql-tag");

const GET_PRODUCT = gql`
  query Product($sku: String!){
    res: Product(sku: $sku) {
      name
      description
      stock
      available
    }
  }
`;

const GET_CATEGORY = gql`
  query Category($slug: String!){
    res: Category(slug: $slug) {
      name
      description
      products {
        name
      }
    }
  }
`;

module.exports = {
  GET_PRODUCT,
  GET_CATEGORY
}
