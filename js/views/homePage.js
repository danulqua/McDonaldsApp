const view = (db) => {
    let result = ``;
    result += `
    <div class="mt-4 pt-4">
        <h2 class="text-center text-dark font-weight-bold mb-5">Спеціальні пропозиції</h2>
        <div class="carousel rounded shadow overflow-hidden">
    `;
    db.offers.map(offer => {
        if (offer.id == 1) {
            result += `
            <div class="carousel-item hidden show d-block position-relative">
            <h3 class="position-absolute text-white font-weight-bold">${offer.slogan}</h3>
            <a href="#offer/${offer.id}">
                <img style="width: 100%" src="${offer.img}" draggable="false" alt="${offer.name}" />
            </a>
            </div>
            `
        }
        else {
            result += `
            <div class="carousel-item hidden d-block position-relative">
            <h3 class="position-absolute text-white font-weight-bold">${offer.slogan}</h3>
            <a href="#offer/${offer.id}">
                <img style="width: 100%" src="${offer.img}" draggable="false" alt="${offer.name}" />
            </a>
            </div>
            `
        }
    })
    result += `
                    </div>
                    <div class="carousel-control d-flex justify-content-between align-items-center pl-5 pr-5">
                    <div id="carousel-prev" onclick="prevOffer();">
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <div class="carousel-dots">
    `;
    for (let i = 0; i < db.offers.length; i++) {
        if (i == 0) {
            result += `
            <i class="fas fa-circle selected"></i>
            `
        }
        else {
            result += `
            <i class="fas fa-circle"></i>
            `
        }
    }
    result += `
                    </div>
                    <div id="carousel-next" onclick="nextOffer();">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div class="popular-products">
                <h2 class="text-center text-dark font-weight-bold">Популярні продукти</h2>
                <div class="row">
    `
    for (let i = 0; i < db.popularProducts.length; i++) {
        for (let j = 0; j < db.products.length; j++) {
            if (db.products[j].id == db.popularProducts[i]) {
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
                `
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
                    `
                }
            }
            
        }
        
    }
    result += `
                </div>
            </div>
    `
    return result;
}

export default view;