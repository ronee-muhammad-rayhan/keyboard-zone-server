import httpStatus from "http-status";
import AppError from "../../errors/AppErrors";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const productExist = await Product.findOne({ title: payload.title });
  if (productExist) {
    throw new AppError(httpStatus.CONFLICT, "Product already exist!");
  }
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }
  const result = await Product.findById(id);
  return result;
};

const updateAProductInDB = async (id: string, payload: Partial<TProduct>) => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }

  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAProductFromDB = async (id: string) => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }

  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

export {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateAProductInDB,
  deleteAProductFromDB,
};
