const API_URL = "https://www.course-api.com/javascript-store-products";

// Step 3: fetchProductsThen()
function fetchProductsThen() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("Products fetched using .then():");
      data.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error("Error with fetchProductsThen():", error);
    });
}

// Step 4: fetchProductsAsync()
async function fetchProductsAsync() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Step 5: displayProducts(products)
function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // clear existing

  const limitedProducts = products.slice(0, 5); // show first 5

  limitedProducts.forEach((product) => {
    const { name, price, image } = product.fields;
    const imgUrl = image[0].url;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${imgUrl}" alt="${name}">
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

// Step 6: handleError(error)
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// Step 7: call both functions
fetchProductsThen();
fetchProductsAsync();
