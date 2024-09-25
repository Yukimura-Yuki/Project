
// Получаем элементы
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// Функция для открытия попапа
openPopupBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Функция для закрытия попапа
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Закрытие попапа при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

