import { Injectable } from '@nestjs/common';
import { Post } from '../posts/post.model';
import { PrismaService } from '../../prisma/prisma.service';
import { authorLoginResponses, createAuthorResponses, LoginAuthorDto } from './author.dto';


@Injectable()
export class AuthorService {
    constructor(private prismaService: PrismaService) { }

    async createAuthor(name: string, email: string, password: string): Promise<createAuthorResponses> {

        const newAuthorx = await this.prismaService.author.create({
            data: {
                name,
                email,
                password
            }
        })
        console.log('newAuthorx', newAuthorx)
        return {
            msg: `Sucessfully,created account - ${newAuthorx.name},alhamdulillah`,
            success: true
        }
    }

    async loginAuthor(data: LoginAuthorDto): Promise<authorLoginResponses> {
        let authorx = await this.prismaService.author.findUnique({
            where: { email: data.email }
        })

        if (!authorx) {
            return {
                msg: "Invalid credentials",
                success: false
            }

        }

        console.log(authorx);

        if (authorx.password == data.password) {
            return {
                msg: "Successfully,login to your account",
                success: true
            }
        } else {
            return {
                msg: "Invalid credentials",
                success: false
            }
        }
    }

    async getAuthorPosts(authorId: number): Promise<Post[]> {
        const authorAllPosts = await this.prismaService.author.findUnique({
            where: {
                id: authorId
            },
            include: {
                posts: true
            }
        })
        console.log('authorAllPosts', authorAllPosts);

        return authorAllPosts.posts
    }

}
