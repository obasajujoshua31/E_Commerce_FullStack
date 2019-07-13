import { ProductType } from './../products/product.type';
import { Field, ObjectType } from 'type-graphql';
import { DepartmentType } from '../department/department.type';
import { AttributeValueType } from './attributeValue.type';
@ObjectType()
export class AttributeType {
  @Field()
  attribute_id: number;

  @Field()
  name: string;

  @Field(() => [AttributeValueType])
  attributeValues: AttributeValueType[];
}
