const fs = require('fs');

class Container {
    constructor(file){
        this.file = file
    }

    async save(object){
        const elreal = []
        const data = await fs.promises.readFile("data/products.json")
        const products = JSON.parse(data)
        const id = products.length + 1;
        object.id = id
        products.push(object)
        fs.promises.writeFile("data/products.json", JSON.stringify(products))
    }

    async getById(id){
        const data = await fs.promises.readFile("data/products.json")
        const products = JSON.parse(data)
        const product = products.find((product)=> product.id == id)
        return product
    }

    async getAll(){
        const data = await fs.promises.readFile("data/products.json")
        const products = JSON.parse(data)
        return products;
    }

    async deleteById(id){
        const data = await fs.promises.readFile("data/products.json")
        const products = JSON.parse(data)
        products.splice(id-1, 1)
        fs.promises.writeFile("data/products.json", JSON.stringify(products))
    }

    async deleteAll(){
        fs.promises.writeFile("data/products.json", "[]")
    }
}

