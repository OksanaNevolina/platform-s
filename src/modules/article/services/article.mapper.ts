import { ArticleEntity } from '../../../database/entities/article.entity';
import { UserMapper } from '../../user/services/user.mapper';
import { ArticleListRequestDto } from '../dto/request/article-list.request.dto';
import { ArticleResponseDto } from '../dto/responce/article.response.dto';
import { ArticleListResponseDto } from '../dto/responce/article-list.response.dto';

export class ArticleMapper {
  public static toResponseDto(
    articleEntity: ArticleEntity,
  ): ArticleResponseDto {
    return {
      id: articleEntity.id,
      title: articleEntity.title,
      description: articleEntity.description,
      body: articleEntity.body,
      created: articleEntity.created,
      updated: articleEntity.updated,
      isLiked: articleEntity.likes?.length > 0,
      tags: articleEntity.tags?.map((tag) => tag.name) || [],
      user: articleEntity.user
        ? UserMapper.toResponseForArticleDto(articleEntity.user)
        : null,
    };
  }

  public static toListResponseDto(
    entities: ArticleEntity[],
    total: number,
    query: ArticleListRequestDto,
  ): ArticleListResponseDto {
    return {
      data: entities.map(this.toResponseDto),
      meta: {
        limit: query.limit,
        offset: query.offset,
        total,
      },
    };
  }
}
