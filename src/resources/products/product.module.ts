import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';

@Module({
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
