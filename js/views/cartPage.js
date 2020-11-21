const view = (db) => {
    let result = ``;
    let cartArray = JSON.parse(localStorage.getItem('cart'));
    result += `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Кошик</h2>
                <div class="row">
    `;
    for (let i = 0; i < cartArray.length; i++) {
        for (let j = 0; j < db.products.length; j++) {
            if (db.products[j].id == cartArray[i].id) {
                result += `
                    <div id="card-${db.products[j].id}" class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#product/${db.products[j].id}">
                                <img src="${db.products[j].img}" class="card-img-top" alt="${db.products[j].name}">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">
                                        ${db.products[j].name}<br>
                                        x<span id="quantity-${db.products[j].id}" class="text-dark text-center">${cartArray[i].count}</span> =
                                        <span id="total-${db.products[j].id}" class="text-dark text-center pt-2">${db.products[j].price * cartArray[i].count}</span> грн.
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div id="delete-${db.products[j].id}" class="delete-button btn btn-warning text-dark font-weight-bold d-block mt-2 ml-auto mr-auto">
                            Видалити
                        </div>
                    </div>
                `;
            }
        }
    }

    result += `
                </div>
            </div>
    `;
    
    return result;
}

export default view;