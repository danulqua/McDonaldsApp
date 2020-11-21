let cart = new Array;

function addToCart() {
    let product = {
        id: window.location.hash.split('/')[1],
        count: 1
    };

    if (JSON.parse(localStorage.getItem('cart')) === null || JSON.parse(localStorage.getItem('cart')).length == 0) {
        cart.push(product);
    } else {
        cart = JSON.parse(localStorage.getItem('cart'));
        let isFound = false;
        for (let i = 0; i < cart.length; i++) {
            if (product.id == cart[i].id) {
                cart[i].count++;
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            cart.push(product);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayQuantityOnCartButton();
}

function calculateQuantity() {
    let result = 0;
    if (JSON.parse(localStorage.getItem('cart').length != 0)) {
        JSON.parse(localStorage.getItem('cart')).map(product => {
            result += product.count;
        });
    }
    return result;
}

function displayQuantityOnCartButton() {
    let quantity = calculateQuantity();
    let span = document.getElementById('cartQuantity');
    if (span == null) {
        if (quantity != 0) {
            let cartButton = document.getElementById('cart-button');
            span = document.createElement('span');
            span.id = 'cartQuantity';
            span.innerHTML = quantity;
            cartButton.appendChild(span);
        }
    } else {
        if (quantity == 0) {
            span.remove();
        } else {
            span.innerHTML = quantity;
        }
    }
}

document.querySelector('main').onclick = event => {
    if (event.target.classList.contains('delete-button')) {
        let productId = event.target.id.split('-')[1];
        let card = document.getElementById(`card-${productId}`);
        let quantity = document.getElementById(`quantity-${productId}`);
        let total = document.getElementById(`total-${productId}`);
        let singlePrice = total.innerHTML / quantity.innerHTML;
        cart = JSON.parse(localStorage.getItem('cart'));

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == productId) {
                cart[i].count--;
                if (cart[i].count == 0) {
                    card.remove();
                    cart.splice(i, 1);
                } else {
                    quantity.innerHTML = cart[i].count;
                    total.innerHTML = singlePrice * cart[i].count;
                }

                break;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayQuantityOnCartButton();
    }
}

window.addEventListener('load', () => {
    displayQuantityOnCartButton();
});