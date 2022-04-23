import ProductStore from "../../models/Products/productStore";

describe("Product Model", () => {
    let productStore: any;
    beforeAll(() => {
        productStore = new ProductStore();
    })
    describe("creates product", () => {
        let newProduct: any;

        beforeAll(async () => {
            newProduct = await productStore.create({name:"test_prod", price: 100});
        })
        it("is defined", () => {
            expect(newProduct).toBeDefined();
        })
        it("should return back new product", () => {
            expect(newProduct[0]).toEqual({prod_id:1 ,name:"test_prod", price:"100"})
        })
    })


    describe('index Products', () => {
        let products: any;
        beforeAll( async () => {
            products = await productStore.index();
        })
        it("is defined", () => {
            expect(products).toBeDefined();
        });
        it("Returns products", () => {
            expect(products[0]).toEqual({prod_id:1 ,name:"test_prod", price:"100"});
        })
    })

    describe("show specific Product by ID", () => {
        let Product: any ;
        beforeAll(async () => {
            Product = await productStore.show(1);
        })
        it("is defined", () => {
            expect(Product).toBeDefined();
        });
        it("Returns product with ID 1", () => {
            expect(Product[0]).toEqual({prod_id:1 ,name:"test_prod", price:"100"});
        })
        
    })
});