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
		listItemView.innerHTML += "<li>" + storage[i] + '<input type="hidden" id="hidden-'+i+'" value='+i+' /><input type="button" value="Remove" id="remove-'+i+'" /></li>';
	}
	
	for(i = 0; i < storage.length;i++){
		addEventToRemove(i);
	}
	
});

function addEventToRemove(idx) {
	var el = document.getElementById("remove-"+idx);
	el.addEventListener("click", function() {removeID(idx);} , false);
}

// Remove Function
function removeID(id) {
	console.log("ajon : "+id);
	self.port.emit("remove-adv",id);
}

// Function to change the content of t2
function advFunc() {
  self.port.emit("add-adv",document.getElementById("text-input").value);
}

// add event listener to t
var el = document.getElementById("btnAdv");
el.addEventListener("click", advFunc, false);
