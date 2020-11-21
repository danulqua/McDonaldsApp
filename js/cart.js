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
    JSON.parse(localStorage.getItem('cart')).map(product => {
        result += product.count;
    });

    return result;
}

function displayQuantityOnCartButton() {
    let span = document.getElementById('cartQuantity');
    if (span == null) {
        let cartButton = document.getElementById('cart-button');
        span = document.createElement('span');
        span.id = 'cartQuantity';
        span.innerHTML = calculateQuantity();
        cartButton.appendChild(span);
    } else {
        if (calculateQuantity() == 0) {
            span.remove;
        } else {
            span.innerHTML = calculateQuantity();
        }
    }
}

document.querySelector('.row').onclick = event => {
    if (event.target.classList.contains('delete-button')) {
        console.log(event.target.id);
    }
}

window.addEventListener('load', () => {
    displayQuantityOnCartButton();
});