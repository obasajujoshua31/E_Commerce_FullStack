import { Field, ObjectType } from 'type-graphql';
import { CategoryType } from '../category/category.type';

@ObjectType()
export class DepartmentType {
  @Field()
  department_id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [CategoryType])
  categories: CategoryType;
}
