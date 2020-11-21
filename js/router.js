class Router {
    getCurrentPath() {
        let viewName = 'homePage';
        let categoryId = 0;
        let productId = 0;
        let hash = window.location.hash.split(/[#/]/);

        if (hash.length == 2 && hash[1] == 'categories' || hash.length == 3 && hash[1] == 'categories' && hash[2] == '') {
            viewName = 'categoriesPage';
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