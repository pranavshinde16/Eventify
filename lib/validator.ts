import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 5 characters'),
  description: z.string().min(3, 'Description must be at least 8 characters').max(700, 'Description must be less than 400 characters'),
  location: z.string().min(3, 'Location must be at least 6 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string().min(1,'Please enter a valid price'),
  isFree: z.boolean(),
  url: z.string().url()
})


