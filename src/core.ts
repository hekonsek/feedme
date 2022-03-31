import * as fs from "fs"
import {v4 as uuid} from 'uuid'
import {Storage} from '@google-cloud/storage'

export class SayHello {

    constructor(public name: string) {
    }

    sayHello(): string {
        return "Hello " + this.name + "!"
    }

}

export class FeedMe {

    constructor(private output: Output, private batchCount = 10) {
    }

    feed() {
        for (let i = 0; i < this.batchCount; i++) {
            for (let i = 0; i < 1000; i++) {
                let product = new Product("productName")
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

export class FileSystemOutput implements Output {

    private products = []

    constructor() {
    }

    append(product: Product) {
        this.products.push(product)
    }

    flush() {
        let productsJSON = JSON.stringify({products: this.products})
        fs.writeFileSync(this.nextOutputFilename(), productsJSON)
    }

    nextOutputFilename() {
        return "output-" + uuid() + ".json"
    }

}

export class GcpOutput implements Output {

    private products = []

    constructor() {
    }

    append(product: Product) {
        this.products.push(product)
    }

    flush() {
        let productsJSON = JSON.stringify({products: this.products})
        let storage = new Storage()
        let stream = storage.bucket("feedme-test-henryk").file(this.nextOutputFilename()).createWriteStream()
        stream.end(productsJSON)
    }

    nextOutputFilename() {
        return "output-" + uuid() + ".json"
    }

}

export class Product {

    constructor(public name: string) {
    }

}