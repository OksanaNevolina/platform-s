import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import { CommentEntity } from '../../../../database/entities/comment.entity';
import { LikeEntity } from '../../../../database/entities/like.entity';
import { ArticleResponseDto } from '../../../article/dto/responce/article.response.dto';

export class UserResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: 'f00c8d77-db96-4e15-9697-295bbe9dac2d',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'johndoe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User biography',
    example: 'I am a software developer.',
    required: false,
  })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({
    description: 'User profile image URL',
    example: 'http://example.com/image.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    description: 'List of articles written by the user',
    type: [ArticleResponseDto],
    required: false,
  })
  @IsOptional()
  articles?: ArticleResponseDto[];

  @ApiProperty({
    description: 'List of likes given by the user',
    type: [LikeEntity],
    required: false,
  })
  @IsOptional()
  likes?: LikeEntity[];

  @ApiProperty({
    description: 'List of comments made by the user',
    type: [CommentEntity],
    required: false,
  })
  @IsOptional()
  comments?: CommentEntity[];

  @ApiProperty({
    description: 'List of followers of the user',
    required: false,
  })
  @IsOptional()
  followers?: any[];

  @ApiProperty({
    description: 'List of users that the user is following',
    required: false,
  })
  @IsOptional()
  followings?: any[];

  @ApiProperty({
    description: 'Number of followers the user has',
    example: 42,
  })
  followersCount: number;

  @ApiProperty({
    description: 'Number of articles written by the user',
    example: 10,
  })
  articlesCount: number;

  @ApiProperty({
    description: 'Number of comments made by the user',
    example: 50,
  })
  commentsCount: number;

  @ApiProperty({
    description: 'Number of likes given by the user',
    example: 30,
  })
  likesCount: number;
}
