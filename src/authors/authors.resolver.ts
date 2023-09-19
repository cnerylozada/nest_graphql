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
import { BooksService } from './books.service';
import { Author, Book } from './author.entity';
import { CreateAuthorInputDto, CreateBookInputDto } from './dto';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) {}

  @ResolveField('books', (returns) => [Book])
  getBooksByAuthorId(@Parent() author: Author) {
    return this.booksService.getAllBooksByAuthor(author);
  }

  @Query((returns) => [Author])
  getAllAuthors() {
    return this.authorsService.getAllAuthors();
  }

  @Query((returns) => Author)
  getAuthorById(@Args('id', { type: () => ID! }) id: string) {
    return this.authorsService.getAuthorById(id);
  }

  @Mutation((returns) => Author)
  saveAuthor(@Args('author') author: CreateAuthorInputDto) {
    return this.authorsService.saveAuthor(author);
  }

  @Mutation((returns) => Book)
  async saveBookInAuthor(
    @Args('book') book: CreateBookInputDto,
    @Args('authordId', { type: () => ID! }) authorId: string,
  ) {
    const author = await this.authorsService.getAuthorById(authorId);
    return this.booksService.saveBookInAuthor(book, author);
  }
}
