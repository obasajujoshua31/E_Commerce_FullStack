import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ReviewType {
  @Field()
  review_id: number;

  @Field()
  review: string;

  @Field()
  rating: string;

  @Field()
  created_on: string;

  @Field()
  customer_id: number;

  @Field()
  product_id: number;
}
