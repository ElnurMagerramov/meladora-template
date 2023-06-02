// import axios from "axios";
const axios = require("axios");

const baseUrl = "http://localhost:4040";

const getProducts = async () => {
  return await axios
    .get(baseUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
