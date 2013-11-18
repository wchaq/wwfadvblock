self.port.on("loadPage", function(value) {
	var elements = document.getElementsByTagName("a");
	var listAds = value;
	
	for (var i=0; i < elements.length; i++) {
		var link = elements[i].href;
		for (var j=0; j < listAds.length; j++){
			if(link.indexOf(listAds[j]) !== -1){
				elements[i].style.visibility="hidden";
			}
		}
	}
});