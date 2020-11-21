const view = (db, categoryId) => {
    let result = ``;
    result += `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Категорія "${db.categories[categoryId - 1].name}"</h2>
                <div class="row">
    `;
    db.products.map(product => {
        if (product.categoryId == categoryId) {
            result += `
                    <div class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#product/${product.id}">
                                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">${product.name}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
        `;
        }
    });
    result += `
                </div>
            </div>
    `;
    return result;
}

export default view;