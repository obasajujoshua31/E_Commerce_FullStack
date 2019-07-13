import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  review_id: number;

  @Column()
  customer_id: number;

  @Column()
  product_id: number;

  @Column()
  rating: number;

  @Column({ nullable: true })
  review: string;

  @Column()
  created_on: string;

  @ManyToOne(type => Product, product => product.reviews)
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'product_id',
  })
  product: Product;
}
