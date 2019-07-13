import { AttributeType } from './attribute.type';
import { ProductType } from './../products/product.type';
import { Field, ObjectType } from 'type-graphql';
@ObjectType()
export class AttributeValueType {
  @Field()
  attribute_id: number;

  @Field()
  attribute_value_id: number;

  @Field()
  value: string;

  @Field(() => AttributeType)
  attribute: AttributeType;

  @Field(() => [ProductType])
  products: ProductType[];
}
