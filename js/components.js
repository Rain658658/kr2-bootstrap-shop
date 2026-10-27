export const NavBar = () => {

    const navPanel = document.getElementById('topPanelNavBar');

    navPanel.innerHTML = `
    <div class="container">
        <span class="avatar">
            <img class="avatar-img" src="./images/СимфонияРазрушения.png" alt="mdo" width="40" height="60">
        </span>
        <a class="navbar-brand" href="index.html">Симфония Разрушения</a>

        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Переключить навигацию"
        >
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <a class="nav-link" href="index.html">Главная</a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="catalog.html">Каталог</a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="product.html">Товар</a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="order.html">Заявка</a>
            </li>

            <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Дополнительно
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="catalog.html">Все товары</a></li>
                <li><a class="dropdown-item" href="order.html">Оформить заявку</a></li>
                <li><a class="dropdown-item" href="contacts.html">Контакты</a></li>
                <li><a class="dropdown-item" href="index.html#popular">Популярное</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
    `
}
export const footer = () => {

    const footer = document.getElementById('footer');

    footer.innerHTML = `
    <div class="container">
        <div class="row align-items-center g-3">
        <div class="col-12 col-md-6">
            <p class="mb-0">
            &copy; 2026 Симфония Разрушения. Учебный проект.
            </p>
        </div>

        <div class="col-12 col-md-6 text-md-end">
            <a class="text-white text-decoration-none me-3" href="catalog.html">
            Каталог
            </a>
            <a class="text-white text-decoration-none me-3" href="order.html">
            Заявка
            </a>
            <a class="text-white text-decoration-none me-3" href="contacts.html">
            Контакты
            </a>
        </div>
        </div>
    </div>
    `
}
