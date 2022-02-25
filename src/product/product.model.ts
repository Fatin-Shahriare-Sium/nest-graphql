import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;
  @Field({ nullable: true })
  name: string;
  @Field((type) => Int)
  price?: number;
}
