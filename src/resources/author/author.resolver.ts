import { Author } from './author.types';
import {
  ResolveProperty,
  Resolver,
  Query,
  Parent,
  Args,
} from '@nestjs/graphql';

import { AuthorsService } from './author.service';

@Resolver()
export class AuthorResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => String)
  async hello() {
    return this.authorsService.getHello();
  }

  @Query(() => Author)
  async author(@Args('id') id: number) {
    return await this.authorsService.findById(id);
  }
}
