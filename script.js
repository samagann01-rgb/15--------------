
const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const terms = document.getElementById("terms").checked;

    message.style.color = "#e04455";

    if (!name || !email || !password || !confirm) {
        message.textContent = "Заполните все поля!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Введите правильную почту!";
    } else if (password.length < 8) {
        message.textContent = "Пароль должен содержать минимум 8 символов!";
    } else if (password !== confirm) {
        message.textContent = "Пароли не совпадают!";
    } else if (!terms) {
        message.textContent = "Примите условия использования!";
    } else {
        message.style.color = "#269b68";
        message.textContent = "✓ Регистрация прошла успешно!";
    }
});
