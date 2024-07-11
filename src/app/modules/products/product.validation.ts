import { z } from "zod";

const createProductValidationSchema = z.object({
  body: z.object({
    image: z.string().url("Invalid URL format"),
    title: z.string().min(1, "Title is required"),
    brand: z.string().min(1, "Brand is required"),
    availableQuantity: z
      .number()
      .int()
      .nonnegative("Quantity must be a non-negative integer"),
    price: z.number().nonnegative("Price must be a non-negative number"),
    rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
    description: z.string().min(1, "Description is required"),
  }),
});
const updateProductValidationSchema = z.object({
  body: z.object({
    image: z.string().url("Invalid URL format").optional(),
    title: z.string().min(1, "Title is required").optional(),
    brand: z.string().min(1, "Brand is required").optional(),
    availableQuantity: z
      .number()
      .int()
      .nonnegative("Quantity must be a non-negative integer")
      .optional(),
    price: z
      .number()
      .nonnegative("Price must be a non-negative number")
      .optional(),
    rating: z
      .number()
      .min(0)
      .max(5, "Rating must be between 0 and 5")
      .optional(),
    description: z.string().min(1, "Description is required").optional(),
  }),
});

export { createProductValidationSchema, updateProductValidationSchema };
