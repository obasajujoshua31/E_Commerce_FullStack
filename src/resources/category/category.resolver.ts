import { Int } from 'type-graphql';
import { CategoryType } from './category.type';
import { CategoryService } from './category.service';
import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
// import { Ipagination } from './product.inteface';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(type => [CategoryType])
  async categories() {
    return await this.categoryService.getAllCategories();
  }

  @Query(type => CategoryType)
  async category(@Args('category_id') category_id: number) {
    return await this.categoryService.getOneCategory(category_id);
  }
}
