import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { CreateBookInputDto } from './dto';
import { Author } from '../authors/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async getAllBooks() {
    return this.booksRepository.find();
  }

  async getAllBooksByAuthor(author: Author) {
    const books = await this.booksRepository.findBy({ author });
    return books ? books : [];
  }

  async getBookById(id: string) {
    return this.booksRepository.findOneBy({ id: +id });
  }

  async saveBookInAuthor(book: CreateBookInputDto, author: Author) {
    const newBook = this.booksRepository.create({ ...book, author });
    return this.booksRepository.save(newBook);
  }
}
