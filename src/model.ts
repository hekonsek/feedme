import {v4 as uuid} from 'uuid'

export class Product {

    constructor(public name: string) {
    }

}

export class ProductBuilder {

    static newRandomProduct(): Product {
        return new Product(uuid())
    }

}