class Router {
    getCurrentPath(db) {
        let viewName = 'homePage';
        let categoryId = 0;
        let productId = 0;
        let offerId = 0;
        let hash = window.location.hash.split(/[#/]/);

        if (hash.length == 3 && hash[1] == 'offer' && 0 < hash[2] && db.offers.length >= hash[2]) {
            viewName = 'offerPage';
            offerId = hash[2];
        } else if (hash.length == 2 && hash[1] == 'categories' || hash.length == 3 && hash[1] == 'categories' && hash[2] == '') {
            viewName = 'categoriesPage';
        } else if (hash.length == 3 && hash[1] == 'category' && 0 < hash[2] && db.categories.length >= hash[2]) {
            viewName = 'categoryPage';
            categoryId = hash[2];
        } else if (hash.length == 3 && hash[1] == 'product' && 0 < hash[2] && db.products.length >= hash[2]) {
            viewName = 'productPage';
            productId = hash[2];
        } else if (hash.length == 2 && hash[1] == 'cart' || hash.length == 3 && hash[1] == 'cart' && hash[2] == '') {
            viewName = 'cartPage';
        } else if (hash.length == 2 && hash[1] == 'order' || hash.length == 3 && hash[1] == 'order' && hash[2] == '') {
            viewName = 'orderPage';
        }
        else {
            window.location.hash = '';
        }

        return {
            viewName,
            categoryId,
            productId,
            offerId
        };
    }
}

export default Router;