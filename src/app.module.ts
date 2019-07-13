import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import * as modules from './resources';
import { AppService } from './app.service';

@Module({
  imports: [
    modules.AuthorsModule,
    modules.ProductModule,
    modules.DepartmentModule,
    modules.CategoryModule,
    modules.AttributeModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
