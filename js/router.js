class Router {
    getCurrentPath(db) {
        let viewName = 'homePage';
        let categoryId = 0;
        let productId = 0;
        let hash = window.location.hash.split(/[#/]/);

        if (hash.length == 2 && hash[1] == 'categories' || hash.length == 3 && hash[1] == 'categories' && hash[2] == '') {
            viewName = 'categoriesPage';
        } else if (hash.length == 3 && hash[1] == 'category' && 0 < hash[2] && db.categories.length >= hash[2]) {
            viewName = 'categoryPage';
            categoryId = hash[2];
        } else {
            window.location.hash = '';
        }

        return {
            viewName,
            categoryId,
            productId
        };
    }
}

export default Router;