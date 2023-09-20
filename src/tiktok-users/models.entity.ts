import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Field({ nullable: true })
  bio?: string;

  @Column()
  @Field({ nullable: true })
  image?: string;

  @Column()
  @Field()
  email: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  createAt: Date;

  //   @Column({ type: 'timestamptz' })
  //   updatedAt: Date;

  // @OneToMany(() => Post, (post) => post.user)
  // @Field((type) => [Post], { nullable: true })
  // posts: Post[];

  // @OneToMany(() => Like, (like) => like.user)
  // @Field((type) => [Like], { nullable: true })
  // likes: Like[];

  // @OneToMany(() => Comment, (comment) => comment.user)
  // @Field((type) => [Comment], { nullable: true })
  // comments: Comment[];
}

// @Entity('tiktok-posts')
// @ObjectType()
// export class Post {
//   @PrimaryGeneratedColumn()
//   @Field((type) => Int!)
//   id: string;

//   @Column()
//   @Field()
//   content: string;

//   @Column()
//   @Field()
//   video: string;

//   @ManyToOne(() => User, (user) => user.posts)
//   user: User;

//   @OneToMany(() => Like, (like) => like.post)
//   likes: Like[];

//   @OneToMany(() => Comment, (comment) => comment.post)
//   comments: Comment[];
// }

// @Entity('tiktok-likes')
// @ObjectType()
// export class Like {
//   @PrimaryGeneratedColumn()
//   @Field((type) => Int!)
//   id: string;

//   @ManyToOne(() => Post, (post) => post.likes)
//   post: Post;

//   @ManyToOne(() => User, (user) => user.likes)
//   user: User;
// }

// @Entity('tiktok-comments')
// @ObjectType()
// export class Comment {
//   @PrimaryGeneratedColumn()
//   @Field((type) => Int!)
//   id: string;

//   @Column()
//   @Field()
//   content?: string;

//   @ManyToOne(() => User, (user) => user.comments)
//   user: User;

//   @ManyToOne(() => Post, (post) => post.comments)
//   post: Post;
// }
