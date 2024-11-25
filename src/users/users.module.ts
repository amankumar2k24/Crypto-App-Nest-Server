import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/User';
import { UserRepository } from './users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}


// @Module:
// A decorator that organizes the UsersModule by grouping together related controllers, services, and other providers.

// imports:
// Configures the Mongoose schema for the User model using MongooseModule.forFeature. This makes the schema available for injection in the repository.

// controllers:
// Registers the UsersController, which handles incoming HTTP requests for the /users endpoint.

// providers:
// Registers UsersService and UserRepository, which are responsible for the business logic and database interaction, respectively.