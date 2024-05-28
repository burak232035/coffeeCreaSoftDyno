const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
menuContainer.innerHTML = `
    <h1>Rose Coffee</h1>
    <div class="cart-icon">
        <i class="fas fa-shopping-cart"></i>
        <span ><a href="https://m.mynu.app/mu/798173018673?type=food">MENU</a></span>
    </div>
`;

const menuItems = [];
for (let i = 0; i < 10; i++) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <img src="coffee-${i + 1}.jpg" alt="Coffee ${i + 1}">
        <div class="name">Coffee ${i + 1}</div>
        <div class="price">$${i + 1}.00</div>
    `;
    menuItems.push(menuItem);
}

menuContainer.append(...menuItems);
document.body.appendChild(menuContainer);

menuBtn.addEventListener('click', () => {
    menuContainer.style.display = 'block';
});

document.querySelector('.cart-icon').addEventListener('click', () => {
    alert('Cart is empty!');
});