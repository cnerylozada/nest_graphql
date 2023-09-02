import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { PostsService } from './posts.service';
import { Author, Post } from './author.entity';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @ResolveField('posts', (returns) => [Post])
  getPostsByAuthorId(@Parent() author: Author) {
    return this.postsService.getPostByAuthorId(author.id);
  }

  @Query((returns) => Author)
  getAuthorById(@Args('id', { type: () => ID! }) id: string) {
    return this.authorsService.getAuthorById(id);
  }
}
