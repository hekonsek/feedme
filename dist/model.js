import { v4 as uuid } from 'uuid';
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
    }
    return Product;
}());
export { Product };
var ProductBuilder = /** @class */ (function () {
    function ProductBuilder() {
    }
    ProductBuilder.newRandomProduct = function () {
        return new Product(uuid());
    };
    return ProductBuilder;
}());
export { ProductBuilder };
