import { Injectable } from '@nestjs/common';
import { createProductDto } from './product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products = [
    { id: 1, name: 'xaomi mi ai', price: 1000 },
    { id: 2, name: 'realme 8', price: 22000 },
  ];

  findAllProducts(): Product[] {
    return this.products;
  }

  findSingleProduct(id: number): Product {
    return this.products.find(sig => sig.id == id)
  }

  createProduct(data: createProductDto) {
    let productx = { id: this.products.length + 1, name: data.name, price: data.price }
    return this.products.push(productx)
  }

  deleteSingleProduct(id: number) {
    return this.products.filter(sig => sig.id !== id)
  }
}
