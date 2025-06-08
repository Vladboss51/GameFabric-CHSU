document.addEventListener('DOMContentLoaded', function() {


    // Получаем кнопку "наверх"
    const backToTopButton = document.querySelector('.back-to-top');

    // Обработчик прокрутки страницы
    window.addEventListener('scroll', () => {
        // Если прокрутили больше 300px, показываем кнопку
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Обработчик клика по кнопке
    backToTopButton.addEventListener('click', () => {
        // Плавная прокрутка вверх
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const iframe = document.querySelector('iframe');
    iframe.onload = function() {
        const currentPage = window.location.pathname.split('/').pop();
        iframe.contentWindow.postMessage(currentPage, '*');
    };
    //---------------------------------------------



    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mob-menu');
    
    // Обработчик клика по кнопке
    menuBtn.addEventListener('click', function() {
        // Переключаем состояния
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Блокируем прокрутку тела страницы при открытом меню
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Функция закрытия меню
    function closeMenu() {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Для закрытия меню при переходе по ссылке внутри iframe
    window.addEventListener('message', function(e) {
        if (e.data === 'closeMobileMenu') {
        closeMenu();
        }
    });

    // Подсветка активной страницы
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });


});

