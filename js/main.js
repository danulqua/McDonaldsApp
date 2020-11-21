import './carousel.js';

import TemplateEngine from './templateEngine.js';
import Router from './router.js';

let db;

let router = new Router();
let templateEngine = new TemplateEngine();

let view;
window.onload = () => {
    fetch("http://my-json-server.typicode.com/danil0110/McDonaldsDB/db")
        .then(response => response.json())
        .then(data => {
            db = data;
            let { viewName, endpointName } = router.getCurrentPath();
            import(`../views/${viewName}.js`)
                .then(viewModule => {
                    view = viewModule.default;
                    templateEngine.render(view(db[endpointName]));
            })
        })
}