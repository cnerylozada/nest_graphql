import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsService } from './posts.service';
import { Author, Post } from './author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Post])],
  providers: [AuthorsService, AuthorsResolver, PostsService],
})
export class AuthorsModule {}
