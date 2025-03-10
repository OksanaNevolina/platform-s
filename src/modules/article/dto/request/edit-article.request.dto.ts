import { PickType } from '@nestjs/swagger';

import { BaseArticleRequestDto } from './base-article.request.dto';

export class EditArticleRequestDto extends PickType(BaseArticleRequestDto, [
  'body',
  'title',
  'description',
]) {}
