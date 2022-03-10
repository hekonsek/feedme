import * as fs from "fs";

export class SayHello {

    constructor(public name: string) {
    }

    sayHello(): string {
        return "Hello " + this.name + "!"
    }

}

export class FeedMe {

    constructor(private output: Output) {
    }


    feed() {
        for( let i = 0; i < 10; i++ ) {
            for (let i = 0; i < 1000; i++) {
                var product = new Product("productName")
                this.output.append(product)
            }
            this.output.flush()
        }
    }

}

export interface Output {

    append(product: Product)

    flush()

}

export class FileSystemOutput implements Output{

    private products = []

    private flushes = 0

    constructor() {
    }

    append(product: Product) {
        this.products.push(product)
    }

    flush() {
        var productsJSON = JSON.stringify({products: this.products})
        fs.writeFileSync("output" + ++this.flushes + ".json", productsJSON)
    }

}

export class Product {

    constructor(public name: string) {
    }

}