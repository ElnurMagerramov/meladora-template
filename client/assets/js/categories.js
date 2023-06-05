import { getCategories } from "./requests.js";

let categories = document.querySelector("#categories-ul");

getCategories().then((data) => {
  data.map(
    (category) =>
      (categories.innerHTML += `
      <li class="fw-bold" data-id="${category._id}">${category.name}</li>
        `)
  );
});
