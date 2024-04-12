// Sample product data (can be replaced with actual product data from a database)
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Function to add a product to the shopping cart
function addToCart(productId) {
    // This is a simple example, you would typically add more logic here
    const cartIcon = document.getElementById("cart-icon");
    const cartItemCount = parseInt(cartIcon.textContent.match(/\d+/)[0]) || 0;
    cartIcon.textContent = `🛒 Cart (${cartItemCount + 1})`;
}

// Display products when the page loads
window.onload = displayProducts;
