import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}


// ConfigModule: Used to load environment variables (e.g., .env file).
// isGlobal: true: Makes this module globally available across the entire application, so you don't have to import it in every module separately.

// Async Configuration: forRootAsync allows asynchronous configuration, which is useful when using values (e.g., environment variables) loaded at runtime.
// imports: [ConfigModule]: Ensures ConfigModule is available to load environment variables.
// useFactory: A function that creates the MongoDB connection configuration dynamically.
// configService.get<string>('MONGODB_URI'): Fetches the MongoDB connection string from the environment variables.
// inject: [ConfigService]: Injects ConfigService into the useFactory function, allowing access to environment variables.
