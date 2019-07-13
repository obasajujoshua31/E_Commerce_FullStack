import { Int } from 'type-graphql';
import { AttributeType } from './attribute.type';
import { AttributeService } from './attribute.service';
import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
// import { Ipagination } from './product.inteface';

@Resolver()
export class AttributeResolver {
  constructor(private readonly attributeService: AttributeService) {}

  @Query(type => [AttributeType])
  async attributes() {
    return await this.attributeService.getAllAttributes();
  }

  @Query(type => AttributeType)
  async attribute(@Args('attribute_id') attribute_id: number) {
    return await this.attributeService.getOneAttribute(attribute_id);
  }
}
