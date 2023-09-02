import { Injectable } from '@nestjs/common';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  async getAuthorById(id: string): Promise<Author> {
    return {
      id: '1',
      firstName: 'Cristh',
      posts: [{ id: '1', title: 'My first post', votes: 1 }],
    };
  }
}
