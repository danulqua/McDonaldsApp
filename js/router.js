class Router {
    getCurrentPath() {
        let viewName = "homePage";
        let categoryId = 0;
        let productId = 0;
        switch (window.location.hash.split('#')[1]) {
            case 'products':
                viewName = 'productsPage';
                endpointName = 'products';
                break;
            default:
                break;
        }

        return {
            viewName,
            categoryId,
            productId
        };
    }
}

export default Router;