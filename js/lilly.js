// Sample product data
const products = [
    { id: 1, title: 'Product 1', image: 'product1.jpg', price: 10.99 },
    { id: 2, title: 'Product 2', image: 'product2.jpg', price: 19.99 },
    { id: 3, title: 'Product 3', image: 'product3.jpg', price: 14.99 }
  ];
  
  // Function to display products on the webpage
  function displayProducts() {
    const menuItemsContainer = document.getElementById('menuItemsContainer');
    menuItemsContainer.innerHTML = '';
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('menu-item');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="menu-item-details">
          <h3>${product.title}</h3>
          <p class="menu-item-price">$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      menuItemsContainer.appendChild(card);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      // Add product to cart
      // You can implement your logic here to manage the cart
      console.log(`Added ${product.title} to the cart.`);
    }
  }
  
  // Function to open the cart modal
  function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
  }
  
  // Function to close the cart modal
  function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
  }
  
  // Function to handle checkout process
  function checkout() {
    // Implement your checkout logic here
    console.log('Checkout process...');
  }
  
  // Initial function calls
  displayProducts();
  