import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field((type) => ID!)
  id: string;
  @Field()
  firstName: string;
  @Field((type) => [Post])
  posts: Post[];
}

@ObjectType()
export class Post {
  @Field((type) => ID!)
  id: string;
  @Field()
  title: string;
  @Field((type) => Int, { nullable: true })
  votes?: number;
}
