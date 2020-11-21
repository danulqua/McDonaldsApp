class TemplateProcessor {
    render(view) {
        const root = document.querySelector('main');
        root.innerHTML = view;
    }
}

export default TemplateProcessor;