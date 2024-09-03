const Review = require("../models/Review");
const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { checkPermissions } = require("../utils");
const CustomError = require("../errors");

const createReview = async (req, res) => {
  const { product } = req.body;
  if (!product) {
    throw new CustomError.BadRequestError("Please select a product");
  }
  req.body.user = req.user.userId;
  res.send("create review");
};
const getAllReviews = async (req, res) => {
  res.send("get all reviews");
};
const getSingleReview = async (req, res) => {
  res.send("get single review");
};
const updateReview = async (req, res) => {
  res.send("update review");
};
const deleteReview = async (req, res) => {
  res.send("delete review");
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
