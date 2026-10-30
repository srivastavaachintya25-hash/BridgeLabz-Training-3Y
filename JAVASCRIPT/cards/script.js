
let products = [
    {
        id: 1,
        category: "SPORTS SHOES",
        productName: "Running Shoes",
        review: 120,
        oldPrice: 2499,
        newPrice: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        id: 2,
        category: "WATCH",
        productName: "Silver and White Analog Watch",
        review: 110,
        oldPrice: 5499,
        newPrice: 4999,
        image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=764&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "WATCH",
        productName: "Smart Watch",
        review: 95,
        oldPrice: 3999,
        newPrice: 2999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
];

let productCard = document.querySelector(".product-cards");

products.forEach((product) => {

    productCard.innerHTML += `
        <div class="card">

            <div class="sale-badge">20% OFF</div>

            <div class="heart">❤️</div>

            <div class="image-container">
                <img src="${product.image}"
                     alt="${product.productName}">
            </div>

            <div class="product-info">

                <p class="category">${product.category}</p>

                <h2>${product.productName}</h2>

                <div class="rating">
                    ⭐⭐⭐⭐⭐ <span>(${product.review} Reviews)</span>
                </div>

                <div class="price">
                    <span class="current-price">
                        ₹${product.newPrice}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice}
                    </span>
                </div>

                <button class="cart-btn">Add to Cart</button>

            </div>

        </div>
    `;
});
