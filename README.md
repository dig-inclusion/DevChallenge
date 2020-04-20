# DevChallenge

## Intro
Make an API written in Javascript (or TypeScript) for retrieving product details and stock levels for a store. The database is supplied as a collection of flat file `.json` files and tests are provided to verify the API.

## Requirements

### Running

The server should run on port `5000` on the command `npm run serve`

### Testing

Once the server is running it should pass all tests on `npm run test`

### Queries

Query `Product` should take a variable called `sku` and return:
- `name`: Name of the product
- `description`: Description of the product
- `stock`: Number of items left
- `available`: Boolean, if the product is available to buy (based on stock)

Query `Category` should take a variable of `slug` and return:
- `name`: Name of category
- `description`: Description of category
- `products`: Array of products in the category

## Extra
Write a mutation to "purchase" an item and update the stock levels in the `.json` file. Verify this is successful.

## Resources
- https://graphql.org/
- https://jestjs.io/
- https://www.apollographql.com/docs/apollo-server/
