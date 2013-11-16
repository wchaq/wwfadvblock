self.port.on("loadPage", function(value) {
	var elements = document.getElementsByTagName("a");
	var listAds = value;
	
	for (var i=0; i < elements.length; i++) {
		var link = elements[i].href;
		console.log(link);
		if(link.indexOf("googleads") !== -1 || link.indexOf("adclick") !== -1) {
			elements[i].style.visibility="hidden";
		}
	}
});