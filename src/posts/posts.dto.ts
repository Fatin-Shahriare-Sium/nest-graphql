import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class createPostDto {
    @Field()
    title: string
    @Field()
    body: string
}