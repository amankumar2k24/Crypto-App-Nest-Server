import { Injectable } from '@nestjs/common';
import { CreatePostRequest } from './dto/request/create-post-request.dto';
import { PostResponseDto } from './dto/response/post-response.dto';
import { PostsRepository } from './posts.respository';
import { Post } from './models/Post';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async createPost(
    createPostRequest: CreatePostRequest,
  ): Promise<PostResponseDto> {
    await this.validateCreatePostRequest(createPostRequest);
    const post = await this.postsRepository.insertOne(createPostRequest);
    return this.buildReponse(post);
  }

  private async validateCreatePostRequest(
    createPostRequest: CreatePostRequest,
  ): Promise<void> {
    const post = await this.postsRepository.findById(createPostRequest.id);
    if (post) {
      throw new Error('This post already exist, Create new one!');
    }
  }

  private buildReponse(post: Post): PostResponseDto {
    return {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      author: post.author,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }
}
