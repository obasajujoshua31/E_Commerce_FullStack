import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  private async getCategoryRepo() {
    const categoryRepo = await getRepository(Category);
    return categoryRepo;
  }

  public async getAllCategories() {
    const categoryRepo = await this.getCategoryRepo();
    return categoryRepo.find({
      join: {
        alias: 'category',
        leftJoinAndSelect: {
          department: 'category.department',
          products: 'category.products',
        },
      },
    });
  }

  public async getOneCategory(category_id) {
    const categoryRepo = await this.getCategoryRepo();
    const category = await categoryRepo.findOne({
      where: {
        category_id,
      },
      join: {
        alias: 'category',
        leftJoinAndSelect: {
          department: 'category.department',
          products: 'category.products',
        },
      },
    });

    // console.log(category);
    return category;
  }
}
