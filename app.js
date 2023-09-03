const express = require('express')
const app = express

const faker = require('faker')

app.user(express.json())

app.get('/products', (request, response) => {
  const products = []

  for(let i=0; i < 100; i++){
    const product = {
      id: i + 1,
      name: faker.commerce.productName(),
      brand: faker.commerce.companyName(),
      price: faker.commerce.price(),
      attributes:{
        screen: faker.random.arrayElement(['14','15','16', '22']),
        processor: faker.random.arrayElement(['Intel Core i7'], ['Intel Core i9'] ,['Intel Core i5', ['AMD Ryzen 5'], 'AMD Ryzen 9'], ['AMD Ryzen 7']),
        ram: faker.random.arrayElement(['8GB', '16GB', '32GB'], ['64GB']),
        storage: faker.random.arrayElement(['256GB SSD', '1TB HDD', '512GB NVMe SSD']),
      }
    }

    products.push(product)
  }

  response.json(products)
})

