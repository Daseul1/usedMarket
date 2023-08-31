import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class BoardAddress {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  _id: string;

  @Column()
  @Field(() => String, { nullable: true })
  zipcode?: string;

  @Column()
  @Field(() => String, { nullable: true })
  address?: string;

  @Column()
  @Field(() => String, { nullable: true })
  addressDetail?: string;

  @Column({ default: Date.now })
  @Field(() => Date)
  createdAt: Date;

  @Column({ default: Date.now })
  @Field(() => Date)
  updatedAt: Date;

  @Column()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
