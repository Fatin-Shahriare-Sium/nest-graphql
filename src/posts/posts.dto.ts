import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class createPostDto {
    @Field()
    authorId: number
    @Field()
    title: string
    @Field()
    body: string
}