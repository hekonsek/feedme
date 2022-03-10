import * as fs from "fs";
var SayHello = /** @class */ (function () {
    function SayHello(name) {
        this.name = name;
    }
    SayHello.prototype.sayHello = function () {
        return "Hello " + this.name + "!";
    };
    return SayHello;
}());
export { SayHello };
var FeedMe = /** @class */ (function () {
    function FeedMe(output) {
        this.output = output;
    }
    FeedMe.prototype.feed = function () {
        for (var i = 0; i < 10; i++) {
            for (var i_1 = 0; i_1 < 1000; i_1++) {
                var product = new Product("productName");
                this.output.append(product);
            }
            this.output.flush();
        }
    };
    return FeedMe;
}());
export { FeedMe };
var FileSystemOutput = /** @class */ (function () {
    function FileSystemOutput() {
        this.products = [];
        this.flushes = 0;
    }
    FileSystemOutput.prototype.append = function (product) {
        this.products.push(product);
    };
    FileSystemOutput.prototype.flush = function () {
        var productsJSON = JSON.stringify({ products: this.products });
        fs.writeFileSync("output" + ++this.flushes + ".json", productsJSON);
    };
    return FileSystemOutput;
}());
export { FileSystemOutput };
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
    }
    return Product;
}());
export { Product };
