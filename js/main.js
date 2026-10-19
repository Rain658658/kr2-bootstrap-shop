import {getProducts} from "./products.js"
import {findThreeHits, viewProducts, filterCategories, filterPrice} from "./catalog-service.js"


const productsList = getProducts();
const selectedProductInput = document.getElementById('selected-product');
const orderDialog = document.getElementById('order-dialog');
const closeDialogButton = document.getElementById('close-order-dialog');
const closeSuccessDialogButton = document.getElementById('close-success-dialog');



document.addEventListener('DOMContentLoaded', () => {
  viewProducts(productsList); 
  findThreeHits(productsList);

  const filtersForm = document.getElementById('filters-form');

  if (filtersForm) {
    filtersForm.addEventListener('submit',(event) =>  {
      event.preventDefault();
      filterCategories(filtersForm, productsList);
      // filterPrice(filtersForm, productsList);
    })

    filtersForm.addEventListener('reset', () => {
      const listContainer = document.getElementById('product-list');
      listContainer.innerHTML = ''; 
      viewProducts(productsList);
      
    })
  }

  document.addEventListener('click', (event)=>{
    if (event.target.classList.contains('product-card__button')) {
      const button = event.target;

      const card = button.closest('.product-card');
      const productName = card.querySelector('.product-card__title').textContent
      selectedProductInput.value = productName;
      orderDialog.showModal();

    }
  })
});


const orderButtons = document.querySelectorAll('.product-card__button');

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;

    selectedProductInput.value = productName;

    orderDialog.showModal();
  });
});

closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});


closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

const orderForm = document.getElementById('order-form');

const successMessage = document.getElementById('success-message');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formElements = Array.from(orderForm.elements);

  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });

  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });

    orderForm.reportValidity();
    return;
  }

  successMessage.hidden = false;

  orderForm.reset();

  orderDialog.close();

  successMessage.showModal();
});

closeSuccessDialogButton.addEventListener('click', () => {
  successMessage.hidden = true
})

