import { prisma } from "../../lib/prisma.js";
import bcrypt from "bcrypt";
export const mutationResolvers = {
  Mutation: {
    createUser: async (
      _: unknown,
      args: { username: string; password: string },
    ) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);
      return prisma.user.create({
        data: {
          username: args.username,
          password: hashedPassword,
        },
      });
    },
    createPost: async (
      _: unknown,
      args: { title: string; subtitle: string; body: string },
    ) => {
      return prisma.post.create({
        data: {
          title: args.title,
          subtitle: args.subtitle,
          body: args.body,
        },
      });
    },
    createComment: async (
      _: unknown,
      args: { body: string; commenterId: string; postId: string },
    ) => {
      return prisma.comment.create({
        data: {
          body: args.body,
          commenterId: args.commenterId,
          postId: args.postId,
        },
      });
    },
    likePost: async (_: unknown, args: { userId: string; postId: string }) => {
      return prisma.like.create({
        data: {
          userId: args.userId,
          postId: args.postId,
        },
      });
    },
  },
};
