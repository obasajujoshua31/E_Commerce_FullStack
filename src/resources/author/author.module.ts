import { AuthorsService } from './author.service';
import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';

@Module({
  providers: [AuthorResolver, AuthorsService],
})
export class AuthorsModule {}
