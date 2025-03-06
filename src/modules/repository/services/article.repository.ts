import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ArticleEntity } from '../../../database/entities/article.entity';
import { ArticleListRequestDto } from '../../article/dto/request/article-list.request.dto';
import { IUserData } from '../../auth/interfaces/user-data.interface';

@Injectable()
export class ArticleRepository extends Repository<ArticleEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ArticleEntity, dataSource.manager);
  }

  public async getList(
    query: ArticleListRequestDto,
    userData: IUserData,
  ): Promise<[ArticleEntity[], number]> {
    const qb = this.createQueryBuilder('article');
    qb.leftJoinAndSelect('article.likes', 'like', 'like.user_id = :myId', {
      myId: userData.userId,
    });
    qb.leftJoinAndSelect('article.user', 'user');
    qb.leftJoinAndSelect('article.tags', 'tags');
    qb.leftJoinAndSelect(
      'user.followings',
      'follow',
      'follow.follower_id = :myId',
    );
    qb.setParameter('myId', userData.userId);
    qb.addOrderBy('article.created', 'DESC');
    qb.take(query.limit);
    qb.skip(query.offset);
    return await qb.getManyAndCount();
  }

  public async getArticleById(
    articleId: string,
    userData: IUserData,
  ): Promise<ArticleEntity> {
    const qb = this.createQueryBuilder('article');

    qb.leftJoinAndSelect('article.likes', 'like');
    qb.leftJoinAndSelect('article.user', 'user');
    qb.leftJoinAndSelect('article.tags', 'tag');
    qb.leftJoinAndSelect(
      'user.followings',
      'follow',
      'follow.follower_id = :userId',
    );

    qb.where('article.id = :articleId', { articleId });
    qb.setParameter('userId', userData.userId);

    return await qb.getOne();
  }
}
