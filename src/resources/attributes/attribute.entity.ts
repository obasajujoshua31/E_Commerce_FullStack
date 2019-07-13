import { AttributeValue } from './attributeValue.entity';
import { Department } from './../department/department.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('attribute')
export class Attribute {
  @PrimaryGeneratedColumn()
  attribute_id: number;

  @Column({ length: '100' })
  name: string;

  @OneToMany(() => AttributeValue, attributeValue => attributeValue.attribute)
  @JoinColumn({
    name: 'attribute_id',
    referencedColumnName: 'attribute_id',
  })
  attributeValues: AttributeValue[];
}
