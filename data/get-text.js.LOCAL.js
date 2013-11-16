// When the user hits return, send the "text-entered"
// message to main.js.
// The message payload is the contents of the edit box.
var textArea = document.getElementById("edit-box");
 
// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
//
// Set the focus to the text area so the user can
// just start typing.
self.port.on("show", function onShow(storage) {
  var text = "";
	var i;
	for(i = 0; i < storage.length-1;i++){
		text = text + storage[i] + " - ";
	}
	text = text + storage[i];
	textArea.value = text;  
  textArea.focus();
});

self.port.on("text-storage", function (storage) {
	var text = "";
	var i;
	for(i = 0; i < storage.length-1;i++){
		text = text + storage[i] + " - ";
	}
	text = text + storage[i];
	textArea.value = text;  
});