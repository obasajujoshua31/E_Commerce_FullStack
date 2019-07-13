import { InputType, Field } from 'type-graphql';

@InputType()
export class Ipagination {
  @Field()
  page: number;

  @Field()
  limit: number;
}
