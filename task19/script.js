// Dummy Service Data
const services = [
    { id: 1, name: "Car Washing", price: 500, image: "https://picsum.photos/200/120?random=1" },
    { id: 2, name: "Home Cleaning", price: 1200, image: "https://picsum.photos/200/120?random=2" },
    { id: 3, name: "AC Repairing", price: 800, image: "https://picsum.photos/200/120?random=3" },
    { id: 4, name: "Plumbing Service", price: 350, image: "https://picsum.photos/200/120?random=4" }
];

let cart = [];
let totalAmount = 0;

// DOM Elements
const servicesGrid = document.getElementById('services-grid');
const cartList = document.getElementById('cart-list');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const totalAmountSpan = document.getElementById('total-amount');
const orderForm = document.getElementById('order-form');

// 1. Display Services Dynamically
function displayServices() {
    servicesGrid.innerHTML = "";
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.id = `service-${service.id}`;
        card.innerHTML = `
            <img src="${service.image}" alt="${service.name}">
            <h4>${service.name}</h4>
            <p>Price: ₹${service.price}</p>
            <div class="btn-group">
                <button class="skip-btn" onclick="skipItem(${service.id})">Skip Item</button>
                <button class="add-btn" onclick="addItemToCart(${service.id})">Add Item</button>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
}

// 2. Add Item to Cart Logic
function addItemToCart(id) {
    const selectedService = services.find(s => s.id === id);
    
    // Check if already in cart
    if (cart.some(item => item.id === id)) {
        alert("This service is already in your cart!");
        return;
    }

    cart.push(selectedService);
    updateCartUI();
}

// 3. Skip/Hide Item Logic
function skipItem(id) {
    const card = document.getElementById(`service-${id}`);
    if (card) {
        card.style.opacity = '0.3'; // Item ko dim ya hide karne ke liye
        card.style.pointerEvents = 'none'; // Buttons disable ho jayenge
    }
}

// 4. Update Cart and Total Price
function updateCartUI() {
    cartList.innerHTML = "";
    
    if (cart.length === 0) {
        emptyCartMsg.style.display = 'block';
        totalAmount = 0;
    } else {
        emptyCartMsg.style.display = 'none';
        totalAmount = 0;
        
        cart.forEach(item => {
            const li = document.createElement('li');
            li.style.margin = "8px 0";
            li.innerText = `${item.name} - ₹${item.price}`;
            cartList.appendChild(li);
            
            totalAmount += item.price;
        });
    }
    
    totalAmountSpan.innerText = totalAmount;
}

// 5. Booking Form Submit Alert
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(cart.length === 0) {
        alert("Please add at least one service to book!");
    } else {
        alert(`Booking Successful for amount ₹${totalAmount}!`);
        // Reset Cart
        cart = [];
        updateCartUI();
        orderForm.reset();
    }
});

// Initialize on load
displayServices();