import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String, { nullable: true })
  writer?: string;

  @Column()
  password?: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;

  @Column()
  @Field(() => String, { nullable: true })
  youtubeUrl?: string;

  @Column({ default: 0 })
  @Field(() => Int)
  likeCount: number;

  @Column({ default: 0 })
  @Field(() => Int)
  dislikeCount: number;

  @Column()
  @Field(() => [String], { nullable: true })
  images: string[];

  @Column({ default: Date.now })
  @Field(() => Date)
  createdAt: Date;

  @Column({ default: Date.now })
  @Field(() => Date)
  updatedAt: Date;

  @Column()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // @Field(() => BoardAddress, { nullable: true })
  // boardAddress?: BoardAddress;

  // @Field(() => User, { nullable: true })
  // user?: User | string;
}
