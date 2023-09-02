import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field((type) => ID!)
  id: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  type?: string;
}
