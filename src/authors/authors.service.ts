import { Injectable } from '@nestjs/common';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorInputDto } from './dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {}

  async getAllAuthors() {
    return this.authorsRepository.find();
  }

  async getAuthorById(id: string) {
    return this.authorsRepository.findOneBy({ id });
  }

  async saveAuthor(author: CreateAuthorInputDto) {
    const newAuthor = new Author();
    newAuthor.firstName = author.firstName;
    newAuthor.posts = [];
    return this.authorsRepository.save(newAuthor);
  }
}
