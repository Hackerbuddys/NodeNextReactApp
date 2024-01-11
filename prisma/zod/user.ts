import * as z from "zod"

export const UserModel = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullish(),
})
