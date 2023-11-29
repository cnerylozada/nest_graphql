import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { BooksService } from '../books/books.service';
import { Author } from './author.entity';
import { CreateAuthorInputDto } from './dto';
import { Book } from 'src/books/book.entity';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) {}

  @ResolveField('books', () => [Book])
  getBooksByAuthorId(@Parent() author: Author) {
    return this.booksService.getAllBooksByAuthor(author);
  }

  @Query(() => [Author])
  getAllAuthors() {
    return this.authorsService.getAllAuthors();
  }

  @Query(() => Author)
  getAuthorById(@Args('id', { type: () => ID }) id: string) {
    return this.authorsService.getAuthorById(id);
  }

  @Mutation(() => Author)
  saveAuthor(@Args('author') author: CreateAuthorInputDto) {
    return this.authorsService.saveAuthor(author);
  }

  @Mutation(() => String)
  deleteAuthorById(@Args('id', { type: () => String! }) id: string) {
    return this.authorsService.deleteAuthorById(id);
  }
}
