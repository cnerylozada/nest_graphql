import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
