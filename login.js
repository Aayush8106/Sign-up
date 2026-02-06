const password = document.getElementById("p-i");
const eye = document.getElementById("togglePassword");

function toggle() {
    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "🙈";
    } else {
        password.type = "password";
        eye.textContent = "👀";
    }
}

eye.addEventListener("click", toggle);

const uerror = document.getElementById("u-e");
const perror = document.getElementById("p-e");
const btn = document.getElementById("done");

const user = document.getElementById("u-i");
const pwd = document.getElementById("p-i");

function checkuser() {
    if (user.value === "") {
        uerror.style.display = "block";
    } else {
        uerror.style.display = "none";
    }
}

function checkpwd() {
    if (pwd.value === "") {
        perror.style.display = "block";
    } else {
        perror.style.display = "none";
    }
}

btn.addEventListener("click", checkuser);
btn.addEventListener("click", checkpwd);

user.addEventListener("input", checkuser);
pwd.addEventListener("input", checkpwd);
