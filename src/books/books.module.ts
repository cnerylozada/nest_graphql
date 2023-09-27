import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { AuthorsModule } from 'src/authors/authors.module';
import { BooksResolver } from './books.resolver';

@Module({
  imports: [forwardRef(() => AuthorsModule), TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BooksResolver],
  exports: [BooksService],
})
export class BooksModule {}
