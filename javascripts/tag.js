document.getElementsByTagName("nav")[0].addEventListener("click", function(event) {
	var event = event || window.event;
	var target = event.target;
	if (target.nodeName === "A") {
		var id = target.id;
		if (id === "index") {
			window.location.href = "/index.html";
		} else {
			window.location.href = "/categories/" + id + "/index.html";
		}
	}
});