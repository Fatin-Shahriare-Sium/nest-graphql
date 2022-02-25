import { Field, InputType } from '@nestjs/graphql';
import { IsEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class createProductDto {
    @Field()
    @IsString()
    @IsEmpty()
    name: string;
    @Field()
    @IsNumber()
    @IsEmpty()
    price: number;
}