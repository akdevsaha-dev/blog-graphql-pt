import { prisma } from "../../lib/prisma.js";

export const queryResolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
    posts: async () => {
      return prisma.post.findMany();
    },
    post: async (_: unknown, args: { id: string }) => {
      return prisma.post.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};
