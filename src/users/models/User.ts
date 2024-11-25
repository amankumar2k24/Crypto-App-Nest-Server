import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class User extends Document {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);


// @nestjs/mongoose package imports:
// Prop: A decorator that marks a property as a schema field.
// Schema: A decorator used to define the class as a Mongoose schema.
// SchemaFactory: A utility that generates a Mongoose schema from a class.

// Document from mongoose:
// The Document type is imported from Mongoose. It represents a Mongoose document (i.e., an instance of a model that has been loaded from the database), which is used to enable Mongoose-specific features like methods and virtuals.