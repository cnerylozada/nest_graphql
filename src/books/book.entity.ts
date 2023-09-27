import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from 'src/authors/author.entity';

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
