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
import { Author, Post } from './author.entity';
import { CreateAuthorInputDto, CreatePostInputDto } from './dto';
import { PostsService } from './posts.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @ResolveField('posts', (returns) => [Post])
  getPostsByAuthorId(@Parent() author: Author) {
    return this.postsService.getAllPostByAuthor(author);
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

  @Mutation((returns) => Post)
  async savePostInAuthor(
    @Args('post') post: CreatePostInputDto,
    @Args('authordId', { type: () => ID! }) authorId: string,
  ) {
    const author = await this.authorsService.getAuthorById(authorId);
    return this.postsService.savePostInAuthor(post, author);
  }
}
