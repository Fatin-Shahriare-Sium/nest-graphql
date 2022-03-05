import { extend, Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class createAuthorDto {
    @Field()
    name: string
    @Field()
    email: string
    @Field()
    password: string
}

@ObjectType()
export class createAuthorResponses {
    @Field()
    msg: string
    @Field()
    success: boolean
}

@ObjectType()
export class authorLoginResponses extends createAuthorResponses { }

@InputType()
export class LoginAuthorDto {
    @Field()
    email: string;
    @Field()
    password: string
}