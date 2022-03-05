
import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
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
}
