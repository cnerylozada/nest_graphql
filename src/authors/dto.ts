import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAuthorInputDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;
}
