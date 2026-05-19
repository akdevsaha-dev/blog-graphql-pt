import { mutationResolvers } from "./mutation.resolver.js";
import { postResolvers } from "./post.resolver.js";
import { queryResolvers } from "./query.resolver.js";

export const resolvers = [queryResolvers, mutationResolvers, postResolvers];
