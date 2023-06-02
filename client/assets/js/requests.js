import axios from "axios";

const baseUrl = "http://localhost:4040";

export const createProduct = async (formData) => {
  await axios
    .post(`${baseUrl}/`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
