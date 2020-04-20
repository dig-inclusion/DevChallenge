const { GET_PRODUCT, GET_CATEGORY } = require("./queries");
const { runQuery } = require("./helpers/queryHelper");

describe("Integration", () => {

  it("get a product with stock", async () => {
    const product = await runQuery(GET_PRODUCT, {sku: 'HP1'});
    const { name, stock, available } = product;
    expect(name).toEqual("Ficus Lyrata");
    expect(stock).toBeGreaterThan(0);
    expect(available).toBe(true);
  })

  it("get a product with no stock", async () => {
    const product = await runQuery(GET_PRODUCT, {sku: 'SO1'});
    const { name, stock, available } = product;
    expect(name).toEqual("Soil");
    expect(stock).toEqual(0);
    expect(available).toBe(false);
  })

  it("get a category", async () => {
    const category = await runQuery(GET_CATEGORY, {slug: 'plants'});
    const { name, products } = category;
    expect(name).toEqual('Plants');
    expect(Array.isArray(products)).toBe(true);
  })

})
