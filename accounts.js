var admin = {
	email: "admin@gmail.com",
	password: "admin"
}

var user = null

var databaser = [
	{
		first_name: "joe",
		last_name: "bakhtiari",
		email: "joe_bakhtiari@gmail.com",
		password: "qwerty124"
	},
	{
		first_name: "harry",
		last_name: "voldemort",
		email: "harry_voldemort@hotmail.com",
		password: "harry_voldemort123"
	}
]

//localStorage.setItem('database', JSON.stringify(databaser))
function displayNameIndex() {
	var user = JSON.parse(localStorage.getItem("user"));
	if(user==null) {
		document.write("")
	}
	else {
		document.write("Welcome back, " + user.first_name)
	}
}

function displayName() {
	var user = JSON.parse(localStorage.getItem("user"));
	if(user==null) {
		document.write("")
	}
	else {
		document.write(user.first_name)
	}
}

function checkLoginForBooking() {
	var user = JSON.parse(localStorage.getItem("user"));
	if(user==null) {
		window.location.href = "signin.html";
	}
}

function logOut() {
	var user = JSON.parse(localStorage.getItem("user"));
	if(user==null) {
		window.location.href = "signin.html";
	}
	else {
		localStorage.removeItem("user");
		window.location.href = "signin.html";
	}
}

function button() {
	var user = JSON.parse(localStorage.getItem("user"));
	if(user==null) {
		document.write("Sign In")
	}
	else {
		document.write("Sign Out")
	}
}

function signIn() {
	var customers = JSON.parse(localStorage.getItem("database"));
	if(customers==null) {
		localStorage.setItem('database', JSON.stringify(databaser))
	}
	var customers = JSON.parse(localStorage.getItem("database"));

	var email = document.getElementById("signup_email").value
	var password = document.getElementById("signup_password").value

	var success = 0

	for(i = 0; i < customers.length; i++) {
		if(email == customers[i].email && password == customers[i].password) {
			alert("Hi " + customers[i].first_name + " you have signed in!")
			//user = customers[i].first_name
			localStorage.setItem('user', JSON.stringify(customers[i]))
			window.location.href = "booking.html";
			success = 1
		}
		//console.log("Yep this email does not exist with us")
	}

	if (success==0) {
		alert("Sorry your email or password is not correct!")
	}


}

function writeUserDetails() {
	var user = JSON.parse(localStorage.getItem("user"));
	document.write("<input type=hidden name = First Name value = " + user.first_name + ">")
	document.write("<input type=hidden name = Last Name value = " + user.last_name + ">")
	document.write("<input type=hidden name = Email value = " + user.email + ">")
}

function registerUser() {
	var customers = JSON.parse(localStorage.getItem("database"));
	if(customers==null) {
		localStorage.setItem('database', JSON.stringify(databaser))
	}
	var customers = JSON.parse(localStorage.getItem("database"));

	var first_name = document.getElementById("signup_first_name").value
	var last_name = document.getElementById("signup_last_name").value
	var dob = document.getElementById("signup_dob").value
	var email = document.getElementById("signup_email").value
	var password = document.getElementById("signup_password").value
	var passwordCon = document.getElementById("signup_passwordCon").value
	
	var failed = 0

	if(password.length < 8) {
		alert("Your password is less then 8 digits")
		failed = 1
	}

	if(password!=passwordCon) {
		alert("your passwords do not match")
		failed = 1
	}

	for(i = 0; i < customers.length; i++) {
		if(email == customers[i].email) {
			alert("Sorry " + first_name + " you already have a account with us")
			failed = 1
			break
		}
		//console.log("Yep this email does not exist with us")
	}

	if(failed==0) {
		var newCustomer = {
			first_name,
			last_name,
			email,
			password
		}
		customers.push(newCustomer)
		alert("You have successfully registered your account, please log in now!")
		window.location.href = "signin.html";
	}
	localStorage.setItem('database', JSON.stringify(customers))
}
