import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [User])
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
