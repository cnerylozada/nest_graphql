import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  async getAllPets(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = '1';
    pet.name = 'Mambo';
    return [pet];
  }
}
