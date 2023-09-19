import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { Author, Book } from './author.entity';
import { BooksService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  providers: [AuthorsService, AuthorsResolver, BooksService],
})
export class AuthorsModule {}
