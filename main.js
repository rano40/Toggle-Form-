var signupBtn = document.querySelector(".signupBtn");
var loginBtn = document.querySelector(".loginBtn");
var moveBtn = document.querySelector(".moveBtn");
var signup = document.querySelector(".signup");
var login = document.querySelector(".login")

loginBtn.addEventListener("click", () =>{
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    signup.classList.remove("signupForm");
    moveBtn.innerHTML = "Login";
}) 

signupBtn.addEventListener("click", () =>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    signup.classList.add("signupForm");
    moveBtn.innerHTML = "Signup";
})