import { Router } from "express";
import { createProduct } from "./product.controller";
import validateRequest from "../../middlewares/validateRequests";
import { createProductValidationSchema } from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  validateRequest(createProductValidationSchema),
  createProduct
);

export default productRoutes;
