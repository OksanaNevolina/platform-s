import { UserEntity } from '../../../database/entities/user.entity';
import { ArticleResponseDto } from '../../article/dto/responce/article.response.dto';
import { UserForArticleResponseDto } from '../dto/response/user.for.article.response.dto';
import { UserResponseDto } from '../dto/response/user.response.dto';

export class UserMapper {
  public static toResponseDto(userEntity: UserEntity): UserResponseDto {
    return {
      id: userEntity.id,
      name: userEntity.name,
      email: userEntity.email,
      bio: userEntity.bio || null,
      image: userEntity.image || null,
      articles:
        userEntity.articles?.map((article) =>
          ArticleResponseDto.fromEntity(article),
        ) || [],
      likes: userEntity.likes || [],
      comments: userEntity.comments || [],
      followers: userEntity.followers || [],
      followings: userEntity.followings || [],
      followersCount: userEntity.followers?.length || 0,
      articlesCount: userEntity.articles?.length || 0,
      commentsCount: userEntity.comments?.length || 0,
      likesCount: userEntity.likes?.length || 0,
    };
  }
  public static toResponseForArticleDto(
    userEntity: UserEntity,
  ): UserForArticleResponseDto {
    return {
      id: userEntity.id,
      name: userEntity.name,
      bio: userEntity.bio || null,
    };
  }
}
