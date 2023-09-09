import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum PetType {
  CAT = 'cat',
  DOG = 'dog',
}
registerEnumType(PetType, { name: 'PetType' });

@Entity('pets')
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => ID!)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column({ type: 'enum', enum: PetType })
  @Field((type) => PetType)
  type: PetType;
}
