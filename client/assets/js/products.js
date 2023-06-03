import { getProducts } from "./requests.js";

let products = document.querySelector("#products");

getProducts().then((data) => {
  data.map(
    (product, index) =>
      (products.innerHTML += `
        <div
          class="card border-0 col-lg-2 col-md-3 col-sm-12 tab-menu-item active"
          data-number="${index}"
         >
          <img
            src="../server/public/uploads/${product.image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body shadow">
            <h4 class="card-text fw-bold">${product.name}</h4>
            <p class="h4 fw-bold green-color">
              ${product.price} <span class="green-color">₼</span>
            </p>
          </div>
        </div>
        `)
  );
});
