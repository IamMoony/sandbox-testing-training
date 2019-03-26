//count for login attempts
var attempt_count =""

function validateUser() {

	var username = document.login.username.value;
	var password = document.login.username.value;
	var valid = false;
	var usernameArray = ["Mike", "David"];
	var passwordArray = ["12345", "54321"];

	for(i = 0; i < usernameArray.length; i++) {
		if(username  == usernameArray[i] && password == passwordArray[i]) {
			valid = true;
			alert("Login successful");
		}
	}
}

$("btn-submit").click(validateUser());

