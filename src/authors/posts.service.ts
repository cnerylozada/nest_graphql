import { Injectable } from '@nestjs/common';
import { Post } from './author.entity';

@Injectable()
export class PostsService {
  async getPostByAuthorId(authorId: string): Promise<Post[]> {
    const post = new Post();
    post.id = '1';
    post.title = 'My first post';
    return [post];
  }
}
