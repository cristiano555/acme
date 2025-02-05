import { z } from 'zod'

const SingleCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  icon: z.string(),
  color: z.string().min(7),
  textColor: z.string().min(7),
});

export const CategoriesSchema = z.array(SingleCategorySchema)

export type TCategories = z.infer<typeof CategoriesSchema>
export type TSingleCategory = z.infer<typeof SingleCategorySchema>