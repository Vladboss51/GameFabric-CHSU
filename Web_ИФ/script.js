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






});

