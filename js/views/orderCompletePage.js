const view = db => {
    let result = ``;
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    result += `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Дякуємо! :)</h2>
                <h3 class="text-center text-dark font-weight-bold">Ваше замовлення №${window.location.hash.split('/')[1]}</h3>
                <div class="d-flex justify-content-center row mt-5">
                    <div class="complete-order">
                        <ul class="list-group">
    `;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < db.products.length; j++) {
            if (db.products[j].id == cart[i].id) {
                result += `
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="text-dark font-weight-bold">${db.products[j].name}</span>
                                    <span>${db.products[j].price * cart[i].count} грн.</span>
                                </div>
                                <span class="badge badge-warning badge-pill">x${cart[i].count}</span>
                            </li>
                        `;
                totalPrice += db.products[j].price * cart[i].count;
            }
        }
    }
    result += `
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="text-dark font-weight-bold">Сума</span>
                                    <span>${totalPrice} грн.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    `;

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    let countText = document.getElementById('cartQuantity');
    if (countText != null) {
        countText.remove();
    }

    return result;
}

export default view;