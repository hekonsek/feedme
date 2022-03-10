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
    function FeedMe() {
    }
    FeedMe.prototype.feed = function () {
        var products = [];
        for (var i = 0; i < 1000; i++) {
            var product = { name: "productName" };
            products.push(product);
        }
        var productsJSON = JSON.stringify({ products: products });
        fs.writeFileSync("output.json", productsJSON);
    };
    return FeedMe;
}());
export { FeedMe };
