import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './models/Post';
import { Model } from 'mongoose';

@Injectable()
export class PostsRepository {
  constructor(
    @InjectModel(Post.name)
    private readonly post: Model<Post>,
  ) {}

  async insertOne(data: Partial<Post>): Promise<Post> {
    const post = new this.post(data);
    return post.save();
  }

  async findById(id: string): Promise<Post> {
    return this.post.findById(id).exec();
  }
}
