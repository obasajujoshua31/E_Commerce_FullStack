import { AttributeService } from './attribute.service';
import { Module } from '@nestjs/common';
import { AttributeResolver } from './attribute.resolver';

@Module({
  providers: [AttributeService, AttributeResolver],
})
export class AttributeModule {}
