const view = db => {
    let result = ``;
    let cart = JSON.parse(localStorage.getItem('cart'));
    result += `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Оплата за замовлення</h2>
                <div class="row mt-5">
                    <div class="col-md-4 col-sm-12 order-md-2 mb-4">
                        <ul class="list-group">
    `;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < db.products.length; j++) {
            if (db.products[j].id == cart[i].id) {
                result += `
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="text-dark font-weight-bold">${db.products[j].name}</span>
                                    <span>${db.products[j].price * cart[i].count} грн.</span>
                                </div>
                                <span class="badge badge-warning badge-pill">x${cart[i].count}</span>
                            </li>
                        `;
                totalPrice += db.products[j].price * cart[i].count;
            }
        }
    }
    result += `
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="text-dark font-weight-bold">Сума</span>
                                    <span>${totalPrice} грн.</span>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div class="col-md-8 col-sm-12">
                            <form class="needs-validation" novalidate>
                                <h4 class="text-dark font-weight-bold pb-2">Персональні дані</h4>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="firstName">Ім'я*</label>
                                            <input type="text" class="form-control" id="firstName" required pattern="[A-Za-zА-Яа-яЁёІіЄєЇї']+" />
                                            <div class="invalid-feedback">Введіть правильне ім'я.</div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="secondName">Прізвище*</label>
                                            <input type="text" class="form-control" id="secondName" required pattern="[A-Za-zА-Яа-яЁёІіЄєЇї']+" />
                                            <div class="invalid-feedback">Введіть правильне прізвище.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="phone">Номер телефону*</label>
                                            <input type="tel" class="form-control" id="phone" required placeholder="0952225588" minlength="10" maxlength="10" pattern="[0-9]{10}" />
                                            <div class="invalid-feedback">Введіть правильний номер телефону.</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <label for="email">E-mail*</label>
                                            <input type="email" class="form-control" id="email" required placeholder="mail@gmail.com" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" />
                                            <div class="invalid-feedback">Введіть правильну електронну адресу.</div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h4 class="text-dark font-weight-bold pb-2">Деталі замовлення</h4>
                                <div class="form-group">
                                    <label for="address">Адреса доставки*</label>
                                    <input type="text" class="form-control" id="address" required placeholder="Київ, вул. Ереванська, 16" />
                                    <div class="invalid-feedback">Введіть правильну адресу доставки.</div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="date">Дата доставки*</label>
                                            <input type="date" class="form-control" id="date" min="2020-11-22" required pattern="[0-9]{2}[0-9]{2}[0-9]{4}" />
                                            <div class="invalid-feedback">Оберіть дату доставки.</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="time">
                                                Час доставки*
                                                <span class="text-muted">(10:00 - 22:00)</span>
                                            </label>
                                            <input type="time" class="form-control" id="time" min="10:00" max="22:00" required />
                                            <div class="invalid-feedback">Оберіть час доставки.</div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h4 class="text-dark font-weight-bold pb-2">Платіжна інформація</h4>
                                <div class="form-group">
                                    <label for="cc-number">Номер карти*</label>
                                    <input type="text" inputmode="numeric" class="form-control" id="cc-number" required minlength="16" maxlength="16" pattern="[0-9]{16}" />
                                    <div class="invalid-feedback">Введіть правильний номер карти.</div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="cc-expireDate">Термін дії*</label>
                                            <input type="text" class="form-control" id="cc-expireDate" required minlength="5" maxlength="5" placeholder="07/25" pattern="[0-9]{2}/[0-9]{2}" />
                                            <div class="invalid-feedback">Введіть правильний термін дії.</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="cc-cvv">CVV*</label>
                                            <input type="text" inputmode="numeric" class="form-control" id="cc-cvv" required minlength="3" maxlength="3" placeholder="289" pattern="[0-9]{3}" />
                                            <div class="invalid-feedback">Введіть правильний CVV-код.</div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button id="submitButton" class="btn btn-warning font-weight-bold" type="submit">Замовити</button>
                            </form>
                        </div>
                    </div>
                </div>
    `;
    return result;
}

export default view;