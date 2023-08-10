// script.js
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartItems1 = document.getElementById('cart-items1');
const checkoutButton = document.getElementById('checkout');
const totalElement = document.getElementById('total');
// const profitElement = document.getElementById('profit');

const products = [
  { name: 'choclate biscuits', price: 300 },
  { name: 'jam', price: 450 },
  { name: 'oil', price: 600  },
  { name: 'ketchup', price: 250 },
  { name: 'lays', price: 100 },
  { name: 'lipton', price: 320 },
  { name: 'noodles', price: 60  },
  { name: 'cigrate', price: 250 },
  { name: 'rice', price: 310 },
  { name: 'sugar', price: 430 },
  // Add more products here
];

let cart = [];

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantityInput = document.querySelectorAll('.quantity')[index];
    const quantity = parseInt(quantityInput.value);
    
    if (quantity > 0) {
      const selectedProduct = products[index];
      const cartItem = { product: selectedProduct, quantity };
      cart.push(cartItem);
      renderCart();
      quantityInput.value = '';
    }
  });
});

checkoutButton.addEventListener('click', () => {
  const total = calculateTotal();
  // const profit = calculateProfit();
  alert(`Total: Rs.${total.toFixed(0)}`);
});

function renderCart() {
  cartItems.innerHTML = '';
  
  cart.forEach((cartItem) => {
    const { product, quantity } = cartItem;
    
    const cartItemElement = document.createElement('li');
    
    cartItemElement.textContent = `${product.name} x ${quantity} `;
    cartItems.appendChild(cartItemElement);
  });
  

  
  const total = calculateTotal();
  totalElement.textContent = `Total: Rs.${total.toFixed(0)}`;
  
  // const profit = calculateProfit();
  // profitElement.textContent = `Profit: Rs.${profit.toFixed(0)}`;

 
}


function calculateTotal() {
  let total = 0;
  
  cart.forEach((cartItem) => {
    const { product, quantity } = cartItem;
    total += product.price * quantity;
  });
  
  return total;
}

function calculateProfit() {
  let profit = 0;
  
  cart.forEach((cartItem) => {
    const { product, quantity } = cartItem;
    profit += (product.price * quantity);
  });
  
  return profit;
}
