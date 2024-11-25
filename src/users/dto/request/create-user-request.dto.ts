import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}



// This code defines a Data Transfer Object (DTO) class called CreateUserRequest, which is used to validate the data received when creating a new user. It uses decorators from the class-validator library to apply validation rules to the properties