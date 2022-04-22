import ProductStore from "../../models/Products/productStore";

describe("ProductStore", () => {
    it('should return all products', async () => {
        const productStore = new ProductStore();
        const products = await productStore.index();
        expect(products).toBeDefined();
    })
});