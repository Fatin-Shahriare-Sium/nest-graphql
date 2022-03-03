
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Post } from './post.model';
import { createPostDto } from './posts.dto';
import { PostsService } from './posts.service';

@Resolver(of => Post)
export class PostsResolver {
    constructor(private postsService: PostsService) { }
    @Query(returns => [Post])
    async findAllPosts(): Promise<Post[]> {
        return this.postsService.getAllPosts()
    }
    @Query(returns => Post)
    async findOnePost(@Args('id') id: number): Promise<Post> {
        return this.postsService.findOnePost(id)
    }

    @Mutation(returns => [Post])
    //@UsePipes(new ValidationPipe())
    async createPost(@Args('data') data: createPostDto) {
        console.log(data)
        return this.postsService.createPost(data)
    }
}
