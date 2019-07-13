import { Department } from './../department/department.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  department_id: number;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: '600' })
  description: string;

  @ManyToMany(type => Product, product => product.categories)
  @JoinTable({
    name: 'product_category',
    joinColumn: {
      name: 'category_id',
      referencedColumnName: 'category_id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'product_id',
    },
  })
  products: Product[];

  @ManyToOne(() => Department, department => department.categories, {
    eager: true,
  })
  @JoinColumn({
    name: 'department_id',
    referencedColumnName: 'department_id',
  })
  department: Department;
}
