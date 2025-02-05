import { z } from 'zod'

export const SinglePostSchema = z.object({
  id: z.string(),
  title: z.string(),
  lead: z.string(),
  content: z.string(),
  publicationDate: z.string(),
  category: z.string(),
});

export const PostsSchema = z.array(SinglePostSchema)

export type TPosts = z.infer<typeof PostsSchema>
export type TSinglePost = z.infer<typeof SinglePostSchema>
