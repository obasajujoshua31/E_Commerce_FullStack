import { Int } from 'type-graphql';
import { DepartmentType } from './department.type';
import { DepartmentService } from './department.service';
import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
// import { Ipagination } from './product.inteface';

@Resolver()
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(type => [DepartmentType])
  async departments() {
    return await this.departmentService.getAllDepartments();
  }

  @Query(type => DepartmentType)
  async department(@Args('department_id') department_id: number) {
    return await this.departmentService.getOneDepartment(department_id);
  }
}
