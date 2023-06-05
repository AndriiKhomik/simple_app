import axios from "axios";
import { Product, Review } from "../types";

const BASE_URL = "http://localhost:3500";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/products`,
  });
  return response.data;
};

export const getReviews = async (): Promise<Review[]> => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/reviews`,
  });
  return response.data;
};

export const addReview = async (review: Review) => {
  await axios({
    method: "POST",
    url: `${BASE_URL}/reviews`,
    data: {
      comment: review.comment,
      author: review.author,
      date: review.date,
      email: review.email,
      rate: 0,
      phone: review.phone,
    },
  });
};
