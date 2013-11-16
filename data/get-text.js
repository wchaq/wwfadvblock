// When the user hits return, send the "text-entered"
// message to main.js.
// The message payload is the contents of the edit box.
var textArea = document.getElementById("edit-box");
var listItemView = document.getElementById("list_filter");
// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
//
// Set the focus to the text area so the user can
// just start typing.
self.port.on("show", function onShow(storage) {
	var i;
	listItemView.innerHTML = "";
	for(i = 0; i < storage.length;i++){
		listItemView.innerHTML += "<li onclick='removeID()'>" + storage[i] + "</li>";
	}
});

self.port.on("removeID", function onShow(storage) {
	var i;
	listItemView.innerHTML = "";
	for(i = 0; i < storage.length;i++){
		listItemView.innerHTML += "<li onclick='removeID()'>" + storage[i] + "</li>";
	}
});