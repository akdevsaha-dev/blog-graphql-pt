import { prisma } from "../../lib/prisma.js";

export const postResolvers = {
  Mutation: {
    Post: {
      author: async (_: unknown, parent: { authorId: string }) => {
        return prisma.post.findUnique({
          where: {
            id: parent.authorId,
          },
        });
      },
      comments: async (_: unknown, parent: { id: string }) => {
        return prisma.comment.findUnique({
          where: {
            id: parent.id,
          },
        });
      },
      likes: async (_: unknown, parent: { id: string }) => {
        return prisma.like.findUnique({
          where: {
            id: parent.id,
          },
        });
      },
    },
  },
};
