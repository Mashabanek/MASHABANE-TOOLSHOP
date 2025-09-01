let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - R${item.price}`;
        cartItems.appendChild(li);
    });
}

function checkout() {
    alert('Order completed! Thank you for shopping with Woodworx 🪵');
    cart = [];
    displayCart();
}

function filterProducts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let productName = cards[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        cards[i].style.display = productName.includes(input) ? '' : 'none';
    }
}


// Cart validation before checkout
function validateCartBeforeCheckout(cart) {
    if (!cart || cart.length === 0) {
        alert("Your cart is empty. Please add items before completing the order.");
        return false;
    }
    return true;
}

// Example integration: wrap existing checkout function
if (typeof checkout === "function") {
    const originalCheckout = checkout;
    checkout = function() {
        if (validateCartBeforeCheckout(cart)) {
            originalCheckout();
        }
    }
}
