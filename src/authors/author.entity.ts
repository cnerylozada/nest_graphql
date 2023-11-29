import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @OneToMany(() => Book, (book) => book.author, { cascade: true })
  @Field(() => [Book], { nullable: true })
  books?: Book[];
}
