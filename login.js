var attempt = 3;

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("email").value;
	if (username == "admin" && password == "12345" && email == "admin@gmail.com") {
		alert("Anda Berhasil Login");
		window.location == "succses.html";
		window.open("succses.html")
		return false;
	}
	else if(username == "admin" && password == "12345" && email == "08123456789") {
		alert("Anda Berhasil Login");
		window.location == "succses.html";
		window.open("succses.html")
		return false;
	} 
	else{
		attempt--
		alert("You have left " + attempt + " attempt");

		if (attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("email").disabled = true;
			document.getElementById("submit").disabled = true;
			return true;
		}
	}
}