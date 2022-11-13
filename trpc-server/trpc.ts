import { Context } from './context';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;

export const publicProcedure = t.procedure;

export const middleware = t.middleware;

export const mergeRouters = t.mergeRouters;
