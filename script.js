//your JS code here. If required.
const form = document.getElementById("myform");
form.addEventListener("submit",function(e){
	e.preventDefault();

	const fontsize = document.getElementById("fontsize").value;
	const fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `fontcolor=${fontcolor}`;
	document.cookie = `fontsize=${fontsize}`;

});
document.addEventListener("DOMContentLoaded", () => {

    const cookies = document.cookie.split("; ");

    const fontsizecookie = cookies.find(cookie =>
        cookie.startsWith("fontsize=")
    );

    if (fontsizecookie) {
        const fontsize = fontsizecookie.split("=")[1];
        document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
    }

    const fontcolorcookie = cookies.find(cookie =>
        cookie.startsWith("fontcolor=")
    );

    if (fontcolorcookie) {
        const fontcolor = fontcolorcookie.split("=")[1];
        document.documentElement.style.setProperty(
            "--fontcolor",
            fontcolor
        );
    }

});