import { createParamDecorator } from '@nestjs/common';

//import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator((_, req) => {
  return req.user;
});

/*export const CurrentUserGql = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
);*/
