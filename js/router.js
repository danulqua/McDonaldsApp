class Router {
    getCurrentPath() {
        let viewName = '';
        let endpointName = '';
        switch (window.location.hash.split('#')[1]) {
            case 'products':
                viewName = 'productsPage';
                endpointName = 'products';
                break;
            default:
                viewName = "homePage";
                endpointName = "offers";
                break;
        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;