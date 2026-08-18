//your JS code here. If required.
const form = document.getElementById("myform");
form.addEventListener("submit",function(e){
	e.preventDefault();

	const fontsize = document.getElementById("fontsize").value;
	const fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `fontcolor=${fontcolor}`;
	document.cookie = `fontsize=${fontsize}`;

}

const cookies = document.cookie.split(";");
const fontCookie = cookies.find(cookie => cookie.startWith("fontcolor="));
const fontcolor = fontCookie.split("=").[1];
document.documentElement.style.setProperty("--fontcolor", fontcolor);

const fontCookie = cookies.find(cookie => cookie.startWith("fontsize="));
const fontsize = fontCookie.split("=").[1];
document.documentElement.style.setProperty("--fontsize", fontsize);


					  