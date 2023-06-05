const baseUrl = "http://localhost:4040";

export const getProducts = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};