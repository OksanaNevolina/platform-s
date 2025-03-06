import { ApiProperty } from '@nestjs/swagger';

import { ArticleEntity } from '../../../../database/entities/article.entity';
import { TagEntity } from '../../../../database/entities/tag.entity';
import { UserForArticleResponseDto } from '../../../user/dto/response/user.for.article.response.dto';
import { UserMapper } from '../../../user/services/user.mapper';

export class ArticleResponseDto {
  @ApiProperty({
    example: 'dd3f9787-aa2b-473e-8506-3e25c685f349',
    description: 'Article 10',
  })
  id: string;

  @ApiProperty({ example: 'Article title', description: 'Article title' })
  title: string;

  @ApiProperty({
    example: 'Article description',
    description: 'Article description',
  })
  description: string;

  @ApiProperty({ example: 'description body', description: 'Article body' })
  body: string;

  @ApiProperty({
    example: '"2025-03-03T11:36:04.234Z"',
    description: 'Article date',
  })
  created: Date;

  @ApiProperty({
    example: '"2026-03-03T11:36:04.234Z"',
    description: 'Article update',
  })
  updated: Date;

  @ApiProperty({ example: 'true', description: 'Article ' })
  isLiked: boolean;

  @ApiProperty({ example: ['tag1', 'tag2'], description: 'Article 10' })
  tags: string[];

  @ApiProperty({ description: 'Article 10' })
  user?: UserForArticleResponseDto;

  public static fromEntity(articleEntity: ArticleEntity): ArticleResponseDto {
    const articleDto = new ArticleResponseDto();
    articleDto.id = articleEntity.id;
    articleDto.title = articleEntity.title;
    articleDto.description = articleEntity.description;
    articleDto.body = articleEntity.body;
    articleDto.created = articleEntity.created;
    articleDto.updated = articleEntity.updated;
    articleDto.isLiked = articleEntity.likes?.length > 0;
    articleDto.tags = articleEntity.tags?.map((tag) => tag.name) || [];
    articleDto.user = articleEntity.user
      ? UserMapper.toResponseDto(articleEntity.user)
      : null;

    return articleDto;
  }
}
