import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { UserEntity } from '../../../database/entities/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.manager);
  }
  public async findUserWithRelations(
    userId: string,
  ): Promise<UserEntity | null> {
    return await this.createQueryBuilder('user')
      .leftJoinAndSelect('user.articles', 'articles')
      .leftJoinAndSelect('user.likes', 'likes')
      .leftJoinAndSelect('user.comments', 'comments')
      .leftJoinAndSelect('user.followers', 'followers')
      .leftJoinAndSelect('user.followings', 'followings')
      .where('user.id = :userId', { userId })
      .getOne();
  }
}
