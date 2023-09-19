import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tiktok-users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int!)
  id: string;

  @Column()
  @Field()
  fullName: string;

  @Column()
  @Field()
  bio?: string;

  @Column()
  @Field()
  image?: string;

  @Column()
  @Field()
  email: string;

  //   @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  //   createAt: Date;

  //   @Column({ type: 'timestamptz' })
  //   updatedAt: Date;
}
