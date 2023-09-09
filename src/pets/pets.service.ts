import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetInputDto } from './dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  async getAllPets() {
    return this.petsRepository.find();
  }

  async savePet(pet: CreatePetInputDto) {
    const newPet = this.petsRepository.create(pet);
    return this.petsRepository.save(newPet);
  }

  async deletePetById(petId: string) {
    await this.petsRepository.delete({ id: petId });
    return petId;
  }
}
