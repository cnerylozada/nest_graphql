import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author, Book } from './author.entity';
import { CreateBookInputDto } from './dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async getAllBooksByAuthor(author: Author) {
    const books = await this.booksRepository.findBy({ author });
    return books ? books : [];
  }

  async saveBookInAuthor(book: CreateBookInputDto, author: Author) {
    const newBook = new Book();
    newBook.title = book.title;
    newBook.author = author;
    return this.booksRepository.save(newBook);
  }
}
