import * as fs from "fs";

export class SayHello {

    constructor(public name: string) {
    }

    sayHello(): string {
        return "Hello " + this.name + "!"
    }

}

export class FeedMe {

    feed() {
        var products = []
        for( let i = 0; i < 1000; i++ ) {
            var product = {name: "productName"}
            products.push(product)
        }
        var productsJSON = JSON.stringify({products: products})
        fs.writeFileSync("output.json", productsJSON)
    }

}