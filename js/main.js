import TemplateEngine from './templateEngine.js';
import Router from './router.js';

let router = new Router();
let templateEngine = new TemplateEngine();

let db;
let view;

window.onload = () => {
    displayLoadingSpinner();
    fetch("https://my-json-server.typicode.com/danil0110/McDonaldsDB/db")
        .then(response => response.json())
        .then(data => {
            db = data;
            let { viewName, categoryId, productId, offerId } = router.getCurrentPath(db);
            import(`./views/${viewName}.js`)
                .then(viewModule => {
                    view = viewModule.default;
                    renderPage(categoryId, productId, offerId);
            })
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
}

window.onhashchange = () => {
    displayLoadingSpinner();
    let { viewName, categoryId, productId, offerId } = router.getCurrentPath(db);
    import(`./views/${viewName}.js`)
        .then(viewModule => {
            view = viewModule.default;
            renderPage(categoryId, productId, offerId);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function renderPage(categoryId, productId, offerId) {
    if (categoryId != 0) {
        templateEngine.render(view(db, categoryId));
    } else if (productId != 0) {
        templateEngine.render(view(db, productId));
    } else if (offerId != 0) {
        templateEngine.render(view(db, offerId));
    } else {
        templateEngine.render(view(db));
    }
}

function displayLoadingSpinner() {
    document.querySelector('main').innerHTML = `
    <div class="mt-4 pt-4">
                <div class="loading-spinner"></div>
    </div>
    `;
}