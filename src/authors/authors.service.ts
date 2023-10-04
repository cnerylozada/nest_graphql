import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';
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
    return this.authorsRepository.findOneByOrFail({ id: +id });
  }

  async saveAuthor(author: CreateAuthorInputDto) {
    const newAuthor = this.authorsRepository.create(author);
    return this.authorsRepository.save(newAuthor);
  }

  async deleteAuthorById(id: string) {
    await this.authorsRepository.delete({ id: +id });
    return id;
  }
}
