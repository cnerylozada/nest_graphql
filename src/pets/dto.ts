import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PetType } from './pet.entity';

@InputType()
export class CreatePetInputDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsEnum(PetType)
  @Field((type) => PetType)
  type: PetType;
}
