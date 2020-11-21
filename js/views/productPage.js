const view = (db, productId) => {
    let result = ``;
    result += `
    <div class="mt-4 pt-4">
                <div class="row">
                    <div class="col-lg-8">
                        <img class="w-100" src="${db.products[productId - 1].img}" alt="${db.products[productId - 1].name}">
                    </div>
                    <div class="col-lg-4 d-flex flex-column justify-content-center">
                        <h2 class="text-center text-dark font-weight-bold mt-4">${db.products[productId - 1].name}</h2>
                        <p class="text-dark text-center mt-4 mb-4">
                            ${db.products[productId - 1].description}
                        </p>
                        <div class="d-flex justify-content-center">
                            <h4 class="text-center text-dark font-weight-bold mr-2">
                                ${db.products[productId - 1].price} грн
                            </h4>
                            <div id="${db.products[productId - 1].id}" class="btn btn-warning text-dark font-weight-bold ml-2" product="${db.products[productId - 1].id}" onclick="addToCart();">
                                В кошик
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popular-products">
                <h2 class="text-center text-dark font-weight-bold">Інші продукти</h2>
                <div class="row">
    `;
    for (let i = 0; i < db.products[productId - 1].relatedProducts.length; i++) {
        for (let j = 0; j < db.products.length; j++) {
            if (db.products[j].id == db.products[productId - 1].relatedProducts[i]) {
                if (i != 2) {
                    result += `
                    <div class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#product/${db.products[j].id}">
                                <img src="${db.products[j].img}" class="card-img-top" alt="${db.products[j].name}">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">${db.products[j].name}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                `;
                }
                else {
                    result += `
                    <div class="col-lg-4 col-md-12">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#product/${db.products[j].id}">
                                <img src="${db.products[j].img}" class="card-img-top" alt="${db.products[j].name}">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">${db.products[j].name}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    `;
                }
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