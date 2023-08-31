import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BoardsResolver {
  @Query(() => String)
  qqq() {
    return 'aaa';
  }
}
