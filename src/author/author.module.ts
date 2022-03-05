import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
    imports: [PrismaModule],
    providers: [PrismaService, AuthorService, AuthorResolver],
})
export class AuthorModule { }
