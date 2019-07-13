import { ProductType } from './../products/product.type';
import { Field, ObjectType } from 'type-graphql';
import { DepartmentType } from '../department/department.type';
@ObjectType()
export class CategoryType {
  @Field()
  category_id: number;

  @Field()
  name: string;

  @Field()
  department_id: string;

  @Field()
  description: string;

  @Field(() => [ProductType])
  products: ProductType[];

  @Field(() => DepartmentType)
  department: DepartmentType;
}
