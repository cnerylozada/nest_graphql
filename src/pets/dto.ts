import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePetInputDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @Field({ nullable: true })
  type?: string;
}
