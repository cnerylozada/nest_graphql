import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PetsModule,
    AuthorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
