const { graphQLClient } = require("../client");

async function runQuery(query, variables) {
  const { data: { res } } = await graphQLClient.query({
    query,
    variables,
  });
  return res;
}

module.exports = {
  runQuery
}
