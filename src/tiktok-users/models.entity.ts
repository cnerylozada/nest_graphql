import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tiktok-users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int!)
  id: string;

  @Column()
  @Field()
  fullName: string;

  @Column()
  @Field()
  bio?: string;

  @Column()
  @Field()
  image?: string;

  @Column()
  @Field()
  email: string;

  //   @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  //   createAt: Date;

  //   @Column({ type: 'timestamptz' })
  //   updatedAt: Date;

  @OneToMany(() => Post, (post) => post.user)
  @Field((type) => [Post], { nullable: true })
  posts: Post[];
}

@Entity('tiktok-posts')
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int!)
  id: string;

  @Column()
  @Field()
  text: string;

  @Column()
  @Field()
  video: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @OneToMany(() => Like, (like) => like.post)
  likes: Like[];
}

@Entity('tiktok-likes')
export class Like {
  @PrimaryGeneratedColumn()
  @Field((type) => Int!)
  id: string;

  @ManyToOne(() => Post, (post) => post.likes)
  post: Post;
}
