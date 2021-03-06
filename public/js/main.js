document.addEventListener('DOMContentLoaded', function () {
    // basic
    const body = document.querySelector("body");
    // inputs " Calculate how much you’ll pay "
    const quantity = document.querySelector("#quantity");
    const inMonth = document.querySelector("#inMonth");
    const select = document.querySelector("#package");
    const calculateBoxInputs = document.querySelector(".calculate-box-inputs");
    // boxes where is will be sum of input value
    // oreders price
    const orders = document.querySelector(".orders");
    const ordersCalculate = document.querySelector(".ordersCalculate");
    const ordersSum = document.querySelector(".ordersSum");
    // select package price
    const selectPackage = document.querySelector(".selectPackage");
    const selectPackageCalculate = document.querySelector(".selectPackageCalculate");
    const selectPackageSum = document.querySelector(".selectPackageSum");
    const customSelect = document.querySelector(".custom-select-box");
    const customArrowSecect = document.querySelector(".custom-select-box-arrow");
    const selectDefaultText = document.querySelector(".custom-select-box-default-text");
    const accountingCheckbox = document.querySelector(".container-new-chekbox-accounting");
    const rentalCheckbox = document.querySelector(".container-new-chekbox-rental");
    // accounting price
    const accountingEl = document.querySelector(".accounting");
    const accountingSum = document.querySelector(".accountingSum");
    // terminal price
    const terminalEl = document.querySelector(".terminal");
    const terminalSum = document.querySelector(".terminalSum");
    // span
    const newElSpan = document.querySelector(".for-new-el");
    // else
    const perProduct = 0.5;
    const perDay = 0.25;
    const accounting = 35;
    const terminal = 5;

    body.addEventListener('click', function () {
        if (select.className === 'selcet-package selcet-package-activ-arrow') {
            select.classList.remove('selcet-package-activ-arrow');
            let boxRemove = document.querySelector(".select-option-custome");
            boxRemove.remove();
            customArrowSecect.style.transform = 'rotate(0)'
        }
    })

    const eventForQuantity = function (e) {
        if (quantity.value === '' || quantity.value === null || quantity.value === undefined || quantity.value <= 0) {
            valueProducts.style.display = 'none';
            newElSpan.innerText = 0;
            productsSum.removeAttribute('data-sum');
        } else {
            valueProducts.style.display = 'flex';
            const sumQuantity = quantity.value * perProduct;
            products.innerText = "Products";
            productsCalculate.innerText = quantity.value + " " + "*" + " " + perProduct;
            productsSum.innerText = "$ " + sumQuantity;
            productsSum.setAttribute('data-sum', sumQuantity);
        }
        totalCount();
    }

    quantity.addEventListener('click', eventForQuantity, false);
    quantity.addEventListener('keyup', eventForQuantity, false);

    const eventForOrders = function (e) {
        const suminMonth = inMonth.value * perDay;
        if (inMonth.value === '' || inMonth.value === null || inMonth.value === undefined || inMonth.value <= 0) {
            valueOrders.style.display = 'none';
            ordersSum.removeAttribute('data-sum');
        } else {
            valueOrders.style.display = 'flex';
            orders.innerText = "Orders";
            ordersCalculate.innerText = inMonth.value + " " + "*" + " " + perDay;
            ordersSum.innerText = "$ " + suminMonth;
            ordersSum.setAttribute('data-sum', suminMonth);
        }
        totalCount();
    }

    inMonth.addEventListener('click', eventForOrders, false);
    inMonth.addEventListener('keyup', eventForOrders, false);

    customSelect.addEventListener('click', function (e) {
        e.stopPropagation();
        if (select.className === 'selcet-package selcet-package-activ-arrow') {
            select.classList.remove('selcet-package-activ-arrow');
            let boxRemove = document.querySelector(".select-option-custome");
            boxRemove.remove();
            customArrowSecect.style.transform = 'rotate(0)'
        } else {
            select.classList.add('selcet-package-activ-arrow');
            customArrowSecect.style.transform = 'rotate(180deg)'
            let box = document.createElement('div');
            box.classList.add('select-option-custome');
            let span1 = document.createElement('span');
            span1.classList.add('span-select');
            span1.innerText = 'Basic';
            let span2 = document.createElement('span');
            span2.classList.add('span-select');
            span2.innerText = 'Professional';
            let span3 = document.createElement('span');
            span3.classList.add('span-select');
            span3.innerText = 'Premium';
            box.appendChild(span1);
            box.appendChild(span2);
            box.appendChild(span3);
            calculateBoxInputs.appendChild(box);
            let spanClick = [span1, span2, span3];

            for (const el of spanClick) {
                el.addEventListener('click', function (e) {
                    let boxRemove = document.querySelector(".select-option-custome");
                    if (e.currentTarget === span1) {
                        count = 0;
                        valueAccounting.removeAttribute('data-sum');
                        selectPackageSum.setAttribute('data-sum', count);
                        totalCount();
                        select.value = "basic";
                        boxRemove.remove();
                        select.classList.remove('selcet-package-activ-arrow');
                        customArrowSecect.style.transform = 'rotate(0)'
                    } else if (e.currentTarget === span2) {
                        count = 25;
                        valueAccounting.removeAttribute('data-sum');
                        selectPackageSum.setAttribute('data-sum', count);
                        totalCount();
                        select.value = 'professional';
                        boxRemove.remove();
                        select.classList.remove('selcet-package-activ-arrow');
                        customArrowSecect.style.transform = 'rotate(0)'
                    } else if (e.currentTarget === span3) {
                        count = 60;
                        valueAccounting.removeAttribute('data-sum');
                        selectPackageSum.setAttribute('data-sum', count);
                        totalCount();
                        select.value = 'premium'
                        boxRemove.remove();
                        select.classList.remove('selcet-package-activ-arrow');
                        customArrowSecect.style.transform = 'rotate(0)'
                    }
                    const packageText = selectPackageCalculate.innerText = select.value.charAt(0).toUpperCase() + select.value.slice(1);
                    selectDefaultText.innerText = packageText;
                    selectDefaultText.style.color = '#000'
                    valuePackage.style.display = 'flex';
                    selectPackage.innerText = 'Package';
                    selectPackageCalculate.innerText = packageText;
                    selectPackageSum.innerText = "$ " + count;
                })
            }
        }
    })

    accountingCheckbox.addEventListener('change', function () {
        if (checkboxAccounting.checked) {
            accountingEl.innerText = " Accounting";
            accountingSum.innerText = "$ " + accounting;
            valueAccounting.style.display = 'flex';
            accountingSum.setAttribute('data-sum', accounting)
        } else {
            valueAccounting.style.display = 'none';
            accountingSum.removeAttribute('data-sum');
        }
        totalCount();
    })

    rentalCheckbox.addEventListener('change', function () {
        if (checkboxRental.checked) {
            terminalEl.innerText = " Terminal";
            terminalSum.innerText = "$ " + terminal;
            valueTerminal.style.display = 'flex';
            terminalSum.setAttribute('data-sum', terminal)
        } else {
            valueTerminal.style.display = 'none';
            terminalSum.removeAttribute('data-sum');
        }
        totalCount();
    })

    function totalCount() {
        let p = body.querySelectorAll('[data-sum]');
        console.log(p);
        let sum = 0;
        if (p.length === 0) {
            newElSpan.innerText = sum;
        } else {
            p.forEach(function (el) {
                console.log(el.dataset.sum);
                sum = sum + parseFloat(el.dataset.sum)
                console.log(sum);
                newElSpan.innerText = sum;
            })
        }
    }
});