import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [AuthorsService, AuthorsResolver, PostsService],
})
export class AuthorsModule {}
