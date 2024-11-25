import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UserRepository } from './users.repository';
import { hash } from 'bcrypt';
import { UserResponse } from './dto/response/user-respones.dto';
import { User } from './models/User';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(
    createUserRequest: CreateUserRequest,
  ): Promise<UserResponse> {
    await this.validateCreateUserRequest(createUserRequest);
    const user = await this.userRepository.insertOne({
      ...createUserRequest,
      password: await hash(createUserRequest.password, 10),
    });
    return this.buildResponse(user);
  }

  private async validateCreateUserRequest(
    createUserRequest: CreateUserRequest,
  ): Promise<void> {
    const user = await this.userRepository.findOneByEmail(
      createUserRequest.email,
    );
    if (user) {
      throw new BadRequestException('This email already exists.');
    }
  }

  private buildResponse(user: User): UserResponse {
    return {
      _id: user._id.toString(),
      // _id: user._id.toHexString(),
      email: user.email,
    };
  }
}

// @Injectable():
// Marks the class as a service that can be injected into other classes.

// Dependency Injection (UserRepository):
// The UserRepository is injected to interact with the database (MongoDB).

// Business Logic:
// createUser Method:
// Accepts CreateUserRequest data.
// Hashes the password using bcrypt for security.
// Calls insertOne from the repository to save the user in the database.
// Formats the result using the buildResponse method.

// buildResponse Method:
// Converts the User model instance into the response type UserResponse.
