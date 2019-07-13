import { DepartmentService } from './department.service';
import { Module } from '@nestjs/common';
import { DepartmentResolver } from './department.resolver';

@Module({
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
