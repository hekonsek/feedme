import 'jest'
import {Product, ProductBuilder} from "../src/model";

describe('Product', () => {

    it('should be generated with non-empty name.', async () => {
        let product = ProductBuilder.newRandomProduct()
        expect(product.name).not.toBeUndefined()
        expect(product.name).not.toBe("")
    });

});