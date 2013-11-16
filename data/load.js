self.port.on("loadPage", function(value) {
	var elements = document.getElementsByTagName("a");
	var listAds = value;
	
	for (var i=0; i < elements.length; i++) {
		var link = elements[i].href;
		//console.log(link);
		for (var j=0; j < listAds.length; j++){
			console.log(listAds[j]);
			if(link.indexOf(listAds[j]) !== -1){
				elements[i].style.visibility="hidden";
			}
		}
	}
});