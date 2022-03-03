import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Post } from './post.model';
import { createPostDto } from './posts.dto';

@Injectable()
export class PostsService {
    constructor(private prismaService: PrismaService) { }

    async getAllPosts(): Promise<Post[]> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = res.json()
        console.log(posts);

        return posts;
    }

    async findOnePost(id: number): Promise<Post> {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = res.json()
        return post;
    }

    async createPost(data: createPostDto): Promise<Post[]> {
        //do the logic
        let newPostx = await this.prismaService.post.create({ data })
        const posts: Post[] = []
        return posts;
    }

    async deletePost(id: number) {
        //do the logic
    }
}
