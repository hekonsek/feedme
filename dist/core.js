import * as fs from "fs";
import { v4 as uuid } from 'uuid';
import { Storage } from '@google-cloud/storage';
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
    function FeedMe(output, batchCount) {
        if (batchCount === void 0) { batchCount = 10; }
        this.output = output;
        this.batchCount = batchCount;
    }
    FeedMe.prototype.feed = function () {
        for (var i = 0; i < this.batchCount; i++) {
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
    }
    FileSystemOutput.prototype.append = function (product) {
        this.products.push(product);
    };
    FileSystemOutput.prototype.flush = function () {
        var productsJSON = JSON.stringify({ products: this.products });
        fs.writeFileSync(this.nextOutputFilename(), productsJSON);
    };
    FileSystemOutput.prototype.nextOutputFilename = function () {
        return "output-" + uuid() + ".json";
    };
    return FileSystemOutput;
}());
export { FileSystemOutput };
var GcpOutput = /** @class */ (function () {
    function GcpOutput() {
        this.products = [];
    }
    GcpOutput.prototype.append = function (product) {
        this.products.push(product);
    };
    GcpOutput.prototype.flush = function () {
        var productsJSON = JSON.stringify({ products: this.products });
        var storage = new Storage();
        var stream = storage.bucket("feedme-test-henryk").file(this.nextOutputFilename()).createWriteStream();
        stream.end(productsJSON);
    };
    GcpOutput.prototype.nextOutputFilename = function () {
        return "output-" + uuid() + ".json";
    };
    return GcpOutput;
}());
export { GcpOutput };
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
    }
    return Product;
}());
export { Product };
