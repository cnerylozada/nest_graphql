import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { CreateBookInputDto } from './dto';
import { AuthorsService } from 'src/authors/authors.service';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService,
  ) {}

  @Query(() => [Book])
  async getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Query(() => Book)
  async getBookById(@Args('id', { type: () => ID! }) id: string) {
    return this.booksService.getBookById(id);
  }

  @Mutation(() => Book)
  async saveBookInAuthor(
    @Args('book') book: CreateBookInputDto,
    @Args('authorId', { type: () => ID! }) authorId: string,
  ) {
    const author = await this.authorsService.getAuthorById(authorId);
    return this.booksService.saveBookInAuthor(book, author);
  }
}
