import { Body } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createProductDto } from "./product.dto";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Resolver(of => Product)
export class ProductResolver {
    constructor(private productService: ProductService) { }
    @Query(returns => [Product])
    findAllProducts() {
        return this.productService.findAllProducts()

    }
    @Query(returns => Product)
    findSingleProduct(@Args('id') id: number) {
        console.log(id);
        return this.productService.findSingleProduct(id)
    }
    @Mutation(returns => [Product])
    createProduct(@Args('data') data: createProductDto) {
        return this.productService.createProduct(data)
    }
    @Mutation(returns=>[Product])
    deleteSingleProduct(@Args('id') id:number){
        return this.productService.deleteSingleProduct(id)
    }
}