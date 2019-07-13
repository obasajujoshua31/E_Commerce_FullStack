import { AttributeValueType } from './../attributes/attributeValue.type';
import { CategoryType } from './../category/category.type';
import { Field, Int, ObjectType } from 'type-graphql';
import { ReviewType } from '../reviews/review.type';

@ObjectType()
export class ProductType {
  @Field(type => Int)
  product_id: number;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  image_2: string;

  @Field()
  display: number;

  @Field()
  price: number;

  @Field()
  discounted_price: number;

  @Field()
  thumbnail: string;

  @Field()
  name: string;

  @Field(type => [ReviewType])
  reviews: ReviewType[];

  @Field(type => [CategoryType])
  categories: CategoryType[];

  @Field(() => [AttributeValueType])
  attributeValues: AttributeValueType[];
}
