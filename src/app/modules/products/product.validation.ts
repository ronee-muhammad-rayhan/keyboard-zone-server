import { z } from "jod";

const createProductValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    admin: z.object({
      image: z.string().url().required(),
      title: z.string().min(1).max(255).required(),
      brand: z.string().min(1).max(100).required(),
      availableQuantity: z.number().integer().min(0).required(),
      price: z.number().min(0).precision(2).required(),
      rating: z.number().min(0).max(5).precision(1).required(),
      description: z.string().min(10).max(1000).required(),
    }),
  }),
});

export default createProductValidationSchema;
