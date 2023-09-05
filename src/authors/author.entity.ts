import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('authors')
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((type) => ID!)
  id: string;

  @Column()
  @Field()
  firstName: string;

  @OneToMany(() => Post, (post) => post.author)
  @Field((type) => [Post])
  posts: Post[];
}

@Entity('posts')
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => ID!)
  id: string;

  @Column()
  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;

  @ManyToOne(() => Author, (author) => author.posts)
  author: Author;
}
