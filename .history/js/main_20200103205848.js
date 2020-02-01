document.addEventListener('DOMContentLoaded', function () {
    // basic
    const body = document.querySelector("body");
    // inputs " Calculate how much you’ll pay "
    const quantity = document.querySelector("#quantity");
    const inMonth = document.querySelector("#inMonth");
    const select = document.querySelector("#package");
    const submit = document.querySelector("#submit");
    const form = document.querySelector(".calculate-form");
    // boxes where is will be sum of input value
    // oreders price
    const orders = document.querySelector(".orders");
    const ordersCalculate = document.querySelector(".ordersCalculate");
    const ordersSum = document.querySelector(".ordersSum");
    // select package price
    const selectPackage = document.querySelector(".selectPackage");
    const selectPackageCalculate = document.querySelector(".selectPackageCalculate");
    const selectPackageSum = document.querySelector(".selectPackageSum");
    // accounting price
    const accountingEl = document.querySelector(".accounting");
    const accountingSum = document.querySelector(".accountingSum");
    // terminal price
    const terminalEl = document.querySelector(".terminal");
    const terminalSum = document.querySelector(".terminalSum");
    // span
    const newElSpan = document.querySelector(".for-new-el");
    // else
    const spantTotal = document.querySelector(".spant-total-btn");
    const perProduct = 0.5;
    const perDay = 0.25;
    const accounting = 35;
    const terminal = 5;




    quantity.addEventListener('keyup', function () {
        if (quantity.value === '' || quantity.value === null || quantity.value === undefined || quantity.value <= 0) {
            valueProducts.style.display = 'none';
        } else {
            valueProducts.style.display = 'flex';
            const sumQuantity = quantity.value * perProduct;
            products.innerText = "Products";
            productsCalculate.innerText = quantity.value + " " + "*" + " " + perProduct;
            productsSum.innerText = "$ " + sumQuantity;
        }

    })
    inMonth.addEventListener('keyup', function () {
        if (inMonth.value === '' || inMonth.value === null || inMonth.value === undefined || inMonth.value <= 0) {
            valueOrders.style.display = 'none';
        } else {
            valueOrders.style.display = 'flex';
            const suminMonth = inMonth.value * perDay;
            orders.innerText = "Orders";
            ordersCalculate.innerText = inMonth.value + " " + "*" + " " + perDay;
            ordersSum.innerText = "$" + suminMonth;

        }
    })



    select.addEventListener('change', function () {
        console.log('do');
        let count = 0;

        if (select.value === "professional") {
            count = 25;
        } else if (select.value === 'premium') {
            count = 60;
        }
        valuePackage.style.display = 'flex';
        selectPackage.innerText = 'Package';
        selectPackageCalculate.innerText = select.value.charAt(0).toUpperCase() + select.value.slice(1);
        selectPackageSum.innerText = " $ " + count;
    })

    select.addEventListener('click', function () {
        if (select.className === 'selcet-package selcet-package-activ-arrow') {
            select.classList.remove('selcet-package-activ-arrow');
        } else {
            select.classList.add('selcet-package-activ-arrow');
            let box = document.createElement('div');
            box.classList.add('select-option-custome');

        }

    })


        < div class="select-option-custome" >
            <span class="span-select">Basic</span>
            <span class="span-select">Professional</span>
            <span class="span-select">Premium</span>

</div >


        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const sumQuantity = quantity.value * perProduct;
            products.innerText = "Products";
            productsCalculate.innerText = quantity.value + " " + "*" + " " + perProduct;
            productsSum.innerText = "$ " + sumQuantity;


            const suminMonth = inMonth.value * perDay;
            orders.innerText = "Orders";
            ordersCalculate.innerText = inMonth.value + " " + "*" + " " + perDay;
            ordersSum.innerText = "$" + suminMonth;


            // select section
            let count = 0;

            if (select.value === "professional") {
                count = 25;
            } else if (select.value === 'premium') {
                count = 60;
            }
            selectPackage.innerText = 'Package';
            selectPackageCalculate.innerText = select.value.charAt(0).toUpperCase() + select.value.slice(1);
            selectPackageSum.innerText = " $ " + count;


            // checkbox section
            if (checkboxAccounting.checked) {
                accountingEl.innerText = " Accounting";
                accountingSum.innerText = " $ " + accounting;
            }
            if (checkboxRental.checked) {
                terminalEl.innerText = " Terminal";
                terminalSum.innerText = " $ " + terminal;
            }
            // submit total section

            let submitSum = sumQuantity + suminMonth + count + accounting + terminal;
            newElSpan.innerText = "$" + submitSum;
            // if( newSpanTotal.innerText === )


            // submit.innerText = spantTotal.innerText + " $" + newElSpan;


        });
});