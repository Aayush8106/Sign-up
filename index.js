const password1 = document.getElementById("pwd");
const password2 = document.getElementById("cnf-pwd");

const eye1 = document.getElementById("togglePassword1");
const eye2 = document.getElementById("togglePassword2");

function toggle(pwd, eye) {
    if (pwd.type === "password") {
        pwd.type = "text";
        eye.textContent = "🙈";
    } else {
        pwd.type = "password";
        eye.textContent = "👀";
    }
}

eye1.addEventListener("click", function () {
    toggle(password1, eye1);
});

eye2.addEventListener("click", function () {
    toggle(password2, eye2);
});

const btn = document.getElementById("done");

const username = document.getElementById("u-i");
const usererror = document.getElementById("u-e");

function handleclick() {
    if (username.value === "") {
        usererror.style.display = "block";
        return false;
    } else {
        usererror.style.display = "none";
        return true;
    }
}

btn.addEventListener("click", handleclick);
username.addEventListener("input", handleclick);

const password = document.getElementById("pwd");
const passworderror = document.getElementById("p-e");

function handleclick1() {
    if (password.value === "") {
        passworderror.style.display = "block";
        return false;
    } else {
        passworderror.style.display = "none";
        return true;
    }
}

btn.addEventListener("click", handleclick1);
password.addEventListener("input", handleclick1);

const pwd2 = document.getElementById("cnf-pwd");
const passworderror2 = document.getElementById("cp-e");

function handleclick2() {
    if (pwd2.value === "") {
        passworderror2.style.display = "block";
        return false;
    } else {
        passworderror2.style.display = "none";
        return true;
    }
}

btn.addEventListener("click", handleclick2);
pwd2.addEventListener("input", handleclick2);

const cpe = document.getElementById("cpw-e");

function checkpw() {
    if (password.value !== pwd2.value || password.value === "") {
        cpe.style.display = "block";
        return false;
    } else {
        cpe.style.display = "none";
        return true;
    }
}

btn.addEventListener("click", checkpw);

const s = document.getElementById("s");

function checkall() {
    if (handleclick() && handleclick1() && handleclick2() && checkpw()) {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
}

btn.addEventListener("click", checkall);
