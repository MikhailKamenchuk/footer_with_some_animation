const companyInfoListEl = document.querySelector('.company-info__list');
const deliveryInfoListEl = document.querySelector('.delivery-info__list');
const userServicesListEl = document.querySelector('.user-services__list');

const growUpText = async e => {
    if (e.target.nodeName !== "LI") {
        return
    }

    let current = e.target;
    let siblings = [];

    while (current) {
        siblings.push(current);
        current.previousElementSibling
            ? current = current.previousElementSibling
            : current = null
    }

    for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.add('active');
        await new Promise(resolve => setTimeout(resolve, 500));
        siblings[i].classList.remove('active')
    }
}

companyInfoListEl.addEventListener('click', growUpText);
deliveryInfoListEl.addEventListener('click', growUpText);
userServicesListEl.addEventListener('click', growUpText);