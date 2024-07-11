import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createProductIntoDB,
  deleteAProductFromDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateAProductInDB,
} from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is created successfully ",
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await getAllProductsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products is retrieved successfully ",
    data: result,
  });
});

const getSingleProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleProductFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is retrieved successfully ",
    data: result,
  });
});

const updateAProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateAProductInDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is updated successfully ",
    data: result,
  });
});

const deleteAProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteAProductFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is deleted successfully ",
    data: result,
  });
});

export {
  createProduct,
  getAllProducts,
  getSingleProductById,
  updateAProduct,
  deleteAProduct,
};
