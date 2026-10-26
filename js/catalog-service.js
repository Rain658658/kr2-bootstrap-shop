const newProductCard = (product) => {
    const li = document.createElement('li');
    li.className = 'col-12 col-md-6 col-lg-4';
    
    // li.classList.add('card-body d-flex flex-column');
    li.dataset.id = product.article;
    const card = document.createElement('div');
    card.className = 'card shadow-sm card-body h-100 d-flex flex-column gap-3';

    const image = document.createElement('img');
    image.classList.add('product-card-image')
    image.src = product.imageSrc;
    image.alt = product.imageAlt;

    const title = document.createElement('strong');
    title.className = 'card-title h5 mb-0';
    title.textContent = product.name;

    const category = document.createElement('span');
    category.className = 'badge bg-success align-self-end';
    category.textContent = product.category;
    
    const desc = document.createElement('span');
    desc.className = 'card-text text-muted';
    desc.textContent = product.description;
    // desc.style.display = 'block'; 
    
    const price = document.createElement('span');
    price.className = 'fw-bold fs-5 mt-auto'
    price.textContent = `${product.price} руб.`;
    price.style.display = 'block'; 

    const orderBtn = document.createElement('button');
    orderBtn.className = "btn btn-primary product-card__button";
    orderBtn.textContent = "Заказать"
    orderBtn.dataset.product = product.name;

    card.appendChild(image);
    card.appendChild(title);
    if (category.textContent != '') {
        card.appendChild(category);
    }
    card.appendChild(desc);
    card.appendChild(price);
    card.appendChild(orderBtn);
    li.appendChild(card);

    return li;
}


export const viewProducts = (productsList) => {
    const listContainer = document.getElementById('product-list');
    if (!listContainer) return;
    // Создаем "фрагмент" в памяти, чтобы не перерисовывать браузер на каждой итерации
    const fragment = document.createDocumentFragment();
    
    productsList.forEach((product) => fragment.appendChild(newProductCard(product)));
    
    // Вставляем весь фрагмент в DOM за один раз
    listContainer.appendChild(fragment);
    
}

export const findThreeHits = (productsList) =>{
    const listContainer = document.getElementById('hit-list');
    if (!listContainer) return;
    const fragment = document.createDocumentFragment();
    
    const hitProducts = productsList.filter(product => product.category === "Хит").slice(0, 3);

    hitProducts.forEach((product) => {
        const cardElement = newProductCard(product); 
        fragment.appendChild(cardElement);
    });

    listContainer.appendChild(fragment);
};


export const filterCategories = (filtersForm, productsList) => {
    const checkedBoxes = filtersForm.querySelectorAll('input[name="category"]:checked');
    const selectedCategories = Array.from(checkedBoxes).map(checkbox => checkbox.value);
    if (selectedCategories.length === 0) return filterPrice(filtersForm, productsList);;
    let filtredList = []
    selectedCategories.forEach((param)=>{
    filtredList.push(...productsList.filter(product => product.category === param));
    })
    const listContainer = document.getElementById('product-list');
    listContainer.innerHTML = ''; 
    viewProducts(filtredList);
    return filterPrice(filtersForm, filtredList);
};

export const filterPrice = (filtersForm, productsList) => {
    const priceFrom = filtersForm.querySelector('input[name="price-from"]').value;
    const priceTo = filtersForm.querySelector('input[name="price-to"]').value;

    if (!priceFrom || !priceTo) {
        const listContainer = document.getElementById('product-list');
        listContainer.innerHTML = ''; 
        return viewProducts(productsList);
    }
    let filtredList = []
    filtredList.push(...productsList.filter(product => Number(product.price) >= Number(priceFrom) && Number(product.price) <= Number(priceTo)));
    console.log(filtredList)
    
    const listContainer = document.getElementById('product-list');
    listContainer.innerHTML = ''; 
    viewProducts(filtredList);
};