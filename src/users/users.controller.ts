import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UserResponse } from './dto/response/user-respones.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<UserResponse> {
    return this.userService.createUser(createUserRequest);
  }
}

// @Controller('users'):
// This marks the class as a controller and maps its routes to /users.
// Any HTTP request to /users will be handled here.

// Dependency Injection (private readonly userService: UsersService):
// The UsersService is injected into the controller to handle the business logic for user-related operations.

// @Post() Method:
// Maps the HTTP POST request to the createUser method.
// Expects a request body of type CreateUserRequest (validated using class-validator decorators).

// Logic:
// Calls the createUser method in UsersService to handle the creation of a user.
// Returns a response of type UserResponse.
