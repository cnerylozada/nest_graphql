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

  @OneToMany(() => Book, (book) => book.author)
  @Field((type) => [Book], { nullable: true })
  books?: Book[];
}

@Entity('books')
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn()
  @Field((type) => ID!)
  id: string;

  @Column()
  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
