import { Int } from 'type-graphql';
import { ProductType } from './product.type';
import { ProductService } from './product.service';
import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
import { Ipagination } from './product.inteface';
import { ReviewType } from '../reviews/review.type';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(type => [ProductType])
  async products(@Args('pagination') pagination: Ipagination) {
    const page = pagination.page || 1;
    const limit = pagination.limit || 20;
    const skip = (page - 1) * limit;
    return await this.productService.getAllProducts({
      skip,
      take: limit,
    });
  }

  @Query(type => ProductType)
  async product(@Args('product_id') product_id: number) {
    return await this.productService.getOneProduct(product_id);
  }
}
