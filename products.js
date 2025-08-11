const products = [
    { name: "Laptop", category: "electronics", price: 999, rating: 4.5 },
    { name: "T-Shirt", category: "clothing", price: 20, rating: 4.0 },
    { name: "Phone", category: "electronics", price: 699, rating: 4.7 }
];

function displayProducts(productsToShow) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    productsToShow.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price} (Rating: ${product.rating})`;
        productList.appendChild(li);
    });
}

function filterProducts() {
    const category = document.getElementById('filterCategory').value;
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }
    displayProducts(filteredProducts);
}

function sortProducts(criteria) {
    const sortedProducts = [...products].sort((a, b) => 
        criteria === 'price' ? a.price - b.price : a.rating - b.rating
    );
    displayProducts(sortedProducts);
}

displayProducts(products);