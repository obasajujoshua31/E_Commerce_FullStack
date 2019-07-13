import { AttributeValue } from './../attributes/attributeValue.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Review } from '../reviews/review.entity';
import { Category } from '../category/category.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: '400' })
  description: string;

  @Column()
  price: number;

  @Column()
  discounted_price: number;

  @Column()
  image: string;

  @Column()
  image_2: string;

  @Column()
  thumbnail: string;

  @Column()
  display: number;

  @OneToMany(() => Review, review => review.product)
  @JoinColumn({
    referencedColumnName: 'product_id',
  })
  reviews: Review[];

  @ManyToMany(type => Category, category => category.products)
  @JoinTable({
    name: 'product_category',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'product_id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'category_id',
    },
  })
  categories: Category[];

  @ManyToMany(() => AttributeValue, attributeValue => attributeValue.products)
  @JoinTable({
    name: 'product_attribute',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'product_id',
    },
    inverseJoinColumn: {
      name: 'attribute_value_id',
      referencedColumnName: 'attribute_value_id',
    },
  })
  attributeValues: AttributeValue[];
}
