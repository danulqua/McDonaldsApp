const view = (db, offerId) => {
    let result = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold mb-5">${db.offers[offerId - 1].slogan}</h2>
                <img class="w-100 mb-4 rounded shadow" src="${db.offers[offerId - 1].img}" draggable="false" alt="${db.offers[offerId - 1].name}" />
                <h2 class="text-center text-dark font-weight-bold mb-4">${db.offers[offerId - 1].name}</h2>
                <p class="text-center">${db.offers[offerId - 1].description}</p>
            </div>
    `;
    return result;
}

export default view;