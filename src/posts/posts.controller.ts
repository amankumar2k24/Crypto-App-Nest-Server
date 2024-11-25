import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostRequest } from './dto/request/create-post-request.dto';
import { PostResponseDto } from './dto/response/post-response.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(
    @Body() createPostRequest: CreatePostRequest,
  ): Promise<PostResponseDto> {
    return this.postsService.createPost(createPostRequest);
  }
}
