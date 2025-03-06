import { PickType } from '@nestjs/swagger';

import { UserResponseDto } from './user.response.dto';

export class UserForArticleResponseDto extends PickType(UserResponseDto, [
  'id',
  'name',
  'bio',
  'articles',
]) {}
