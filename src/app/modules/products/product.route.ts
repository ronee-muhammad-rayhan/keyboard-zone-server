import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProductById,
} from "./product.controller";
import validateRequest from "../../middlewares/validateRequests";
import { createProductValidationSchema } from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  validateRequest(createProductValidationSchema),
  createProduct
);

productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getSingleProductById);

export default productRoutes;
