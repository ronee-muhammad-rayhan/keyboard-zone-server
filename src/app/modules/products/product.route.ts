import { Router } from "express";
import { createProduct, getAllProducts } from "./product.controller";
import validateRequest from "../../middlewares/validateRequests";
import { createProductValidationSchema } from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  validateRequest(createProductValidationSchema),
  createProduct
);

productRoutes.get("/", getAllProducts);

export default productRoutes;
