import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  private async getProductRepo() {
    const productRepo = await getRepository(Product);
    return productRepo;
  }

  public async getAllProducts({ take, skip }) {
    const productRepo = await this.getProductRepo();
    return productRepo.find({
      order: {
        product_id: 'ASC',
      },
      take,
      skip,
      join: {
        alias: 'product',
        leftJoinAndSelect: {
          reviews: 'product.reviews',
          categories: 'product.categories',
          attributeValues: 'product.attributeValues',
          attribute: 'attributeValues.attribute',
        },
      },
    });
  }

  public async getOneProduct(product_id) {
    const productRepo = await this.getProductRepo();
    const product = await productRepo.findOne({
      where: {
        product_id,
      },
      join: {
        alias: 'product',
        leftJoinAndSelect: {
          reviews: 'product.reviews',
          categories: 'product.categories',
          attributeValues: 'product.attributeValues',
          attribute: 'attributeValues.attribute',
        },
      },
    });

    // console.log(product.categories);
    return product;
  }
}
