import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './entities';

@Resolver()
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  getAllPets() {
    return this.petsService.getAllPets();
  }
}
