import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { TableNameEnum } from '../enums/table-name.enum';
import { ArticleEntity } from './article.entity';
import { BaseEntity } from './models/base.entity';
import { UserEntity } from './user.entity';

@Entity(TableNameEnum.LIKES)
export class LikeEntity extends BaseEntity {
  @Column()
  article_id: string;
  @ManyToOne(() => ArticleEntity, (entity) => entity.likes)
  @JoinColumn({ name: 'article_id' })
  article?: ArticleEntity;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.likes)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
