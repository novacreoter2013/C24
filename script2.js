function validate(e) {
e.preventDefault();


const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const age = document.getElementById("age").value;
const msgbox = document.getElementById("message");

let message = '';


if (email==='') {

message = "PLEASE ENTER YOUR EMAIL";
msgbox.style.color = "red";
}


else if (password==='') {

message = "PLEASE MUST BE AT LEAST 8 CHARACTER!";
msgbox.style.color = "red";
}

else if (age==='') {

message = "AGE MUST BE BETWEEN 12 AND 50!";
msgbox.style.color = "red";
}

else  {

message = "LOGIN SUCCESSFUL!";
msgbox.style.color = "green";

}

msgbox.innerHTML = message;  

}
