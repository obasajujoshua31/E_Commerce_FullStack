import { Category } from './../category/category.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  department_id: number;

  @Column()
  name: string;

  @Column({ length: '1000' })
  description: string;

  @OneToMany(() => Category, category => category.department)
  @JoinColumn({
    name: 'department_id',
    referencedColumnName: 'department_id',
  })
  categories: Category[];
}
