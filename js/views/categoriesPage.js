const view = (db, unC, unP) => {
    let result = ``;
    result += `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Категорії</h2>
                <div class="row">
    `;
    db.categories.map(category => {
        result += `
                    <div class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#category/${category.id}">
                                <img src="${db.products[category.productIds[0] - 1].img}" class="card-img-top" alt="${db.products[category.productIds[0] - 1].name}">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">${category.name}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
        `;
    });
    result += `
                </div>
            </div>
    `;
    return result;
}

export default view;