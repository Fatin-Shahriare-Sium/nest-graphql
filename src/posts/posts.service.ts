import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Post } from './post.model';
import { createPostDto } from './posts.dto';

@Injectable()
export class PostsService {
    constructor(private prismaService: PrismaService) { }

    async getAllPosts(): Promise<Post[]> {
        const posts = await this.prismaService.post.findMany()
        // const posts = res.json()
        console.log(posts);
        return posts;
    }

    async findOnePost(id: number): Promise<Post[]> {
        const postx = await this.prismaService.post.findMany({
            where: {
                id: id
            }
        })
        console.log(postx)
        return postx
    }

    async createPost(data: createPostDto): Promise<Post> {
        //do the logic
        const newPostx = await this.prismaService.post.create({ data: { title: data.title, body: data.body } })
        console.log('created Post', newPostx);
        return newPostx;
    }

    async deletePost(id: number): Promise<Post> {
        //do the logic
        const postx = await this.prismaService.post.delete({ where: { id } })
        console.log('deleted post', postx);
        return postx;

    }
}
