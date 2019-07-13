import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService {
  private async getDepartmentRepo() {
    const departmentRepo = await getRepository(Department);
    return departmentRepo;
  }

  public async getAllDepartments() {
    const departmentRepo = await this.getDepartmentRepo();
    return departmentRepo.find({
      join: {
        alias: 'department',
        leftJoinAndSelect: {
          categories: 'department.categories',
          products: 'categories.products',
        },
      },
    });
  }

  public async getOneDepartment(department_id) {
    const departmentRepo = await this.getDepartmentRepo();
    const department = await departmentRepo.findOne({
      where: {
        department_id,
      },
      join: {
        alias: 'department',
        leftJoinAndSelect: {
          categories: 'department.categories',
          products: 'categories.products',
        },
      },
    });

    // console.log(department);
    return department;
  }
}
