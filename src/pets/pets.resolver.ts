import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInputDto } from './dto';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  pets() {
    return this.petsService.getAllPets();
  }

  @Mutation((returns) => Pet)
  savePet(@Args('pet') pet: CreatePetInputDto) {
    return this.petsService.savePet(pet);
  }

  @Mutation((returns) => ID!)
  async deletePetById(@Args('petId', { type: () => ID! }) petId: string) {
    return this.petsService.deletePetById(petId);
  }
}
