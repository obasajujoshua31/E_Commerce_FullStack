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
import { Attribute } from './attribute.entity';

@Entity('attribute_value')
export class AttributeValue {
  @PrimaryGeneratedColumn()
  attribute_value_id: number;

  @Column()
  attribute_id: number;

  @Column({ length: '100' })
  value: string;

  @ManyToOne(() => Attribute, attribute => attribute.attributeValues)
  @JoinColumn({
    name: 'attribute_id',
    referencedColumnName: 'attribute_id',
  })
  attribute: Attribute;

  @ManyToMany(() => Product, product => product.attributeValues)
  @JoinTable({
    name: 'product_attribute',
    joinColumn: {
      name: 'attribute_value_id',
      referencedColumnName: 'attribute_value_id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'product_id',
    },
  })
  products: Product[];
}
