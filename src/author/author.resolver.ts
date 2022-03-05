
import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { Post } from '../posts/post.model';
import { authorLoginResponses, createAuthorDto, createAuthorResponses, LoginAuthorDto } from './author.dto';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorResolver {
    constructor(private authorService: AuthorService) { }
    @Mutation((returns) => createAuthorResponses)
    async createAuthor(@Args('data') data: createAuthorDto) {
        console.log(data);
        return this.authorService.createAuthor(data.name, data.email, data.password)
    }
    @Query((returns) => authorLoginResponses)
    async loginAuthor(@Args('data') data: LoginAuthorDto): Promise<authorLoginResponses> {
        return this.authorService.loginAuthor(data)
    }
    @Query((returns) => [Post])
    async getAuthorPosts(@Args('authorId') authorId: number) {
        return this.authorService.getAuthorPosts(authorId)
    }
}
