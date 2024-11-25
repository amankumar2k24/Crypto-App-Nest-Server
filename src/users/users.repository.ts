import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/User';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<User>,
  ) {}

  async insertOne(data: Partial<User>): Promise<User> {
    const user = new this.user(data);
    return user.save();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.user.findOne({ email });
  }
}

// @InjectModel(User.name):
// Injects the User model created using the MongooseModule.forFeature method in the UsersModule.
// Provides access to Mongoose methods (e.g., save(), findOne()).

// Model<User>:
// This is the Mongoose Model for the User schema.
// It allows CRUD operations to be performed on the users collection in the MongoDB database.
