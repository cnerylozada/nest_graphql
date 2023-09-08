import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author, Post } from './author.entity';
import { CreatePostInputDto } from './dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async getAllPostByAuthor(author: Author) {
    const posts = await this.postsRepository.findBy({ author });
    return posts ? posts : [];
  }

  async savePostInAuthor(post: CreatePostInputDto, author: Author) {
    const newPost = new Post();
    newPost.title = post.title;
    newPost.author = author;
    return this.postsRepository.save(newPost);
  }
}
