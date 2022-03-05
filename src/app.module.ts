import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    playground: true
  }), PrismaModule, ProductModule, PostsModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
