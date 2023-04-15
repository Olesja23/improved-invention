const buttonEl = document.querySelector('.button');
const blockEl = document.querySelector('.visible');
const close__popap = document.querySelector('.close__modal')

buttonEl.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible');
});

close__popap.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible');
})




// document.addEventListener('click').onclick = function () {
//     alert(1)
//     if (document.getElementsByClassName("in_text_login").value === "") {
//         alert("Заполните поле имя");
//     } else if (document.getElementsByClassName("in_text_password").value === "") {
//         alert("Заполните поле телефон");
//     } else {
//         alert("Спасибо за заявку! Мы свяжемся с Вами в ближайшее время!")
//     }
// }
