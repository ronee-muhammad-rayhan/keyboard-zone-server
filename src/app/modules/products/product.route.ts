import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProductById,
  updateAProduct,
} from "./product.controller";
import validateRequest from "../../middlewares/validateRequests";
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  validateRequest(createProductValidationSchema),
  createProduct
);

productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getSingleProductById);
productRoutes.patch(
  "/:id",
  validateRequest(updateProductValidationSchema),
  updateAProduct
);

export default productRoutes;
