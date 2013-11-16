var data = require("sdk/self").data;

// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var text_entry = require("sdk/panel").Panel({
  width: 500,
  height: 500,
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("get-text.js")
});
 
// Create a widget, and attach the panel to it, so the panel is
// shown when the user clicks the widget.
require("sdk/widget").Widget({
  label: "Text entry",
  id: "text-entry",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: text_entry
});
 
// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
text_entry.on("show", function() {
  text_entry.port.emit("show",ss.storage.value);
});
 
// Listen for messages called "text-entered" coming from
// the content script. The message payload is the text the user
// entered.
// In this implementation we'll just log the text to the console.
text_entry.port.on("text-entered", function (text) {
  console.log(text);
  text_entry.hide();
});

// Nambah kontext Menu
var cm = require("sdk/context-menu");
cm.Item({
  label: "Add to WWF Add Block",
  context: cm.SelectorContext("a[href], img"),
  contentScript: 'self.on("click", function (node, data) {' +
				 '  self.postMessage(node.src);' +
                 '});',
  onMessage: function (node) {
    ss.storage.value.push(node);
  }
});

//coba SS
var widgets = require("sdk/widget");
var ss = require("sdk/simple-storage");
if(!ss.storage.value)
	ss.storage.value = [];
var count = 1;
 
var widget = widgets.Widget({
  id: "read",
  label: "Read",
  width: 50,
  content: "Read",
  onClick: function() {
    console.log(ss.storage.value);
  }
});

var widget = widgets.Widget({
  id: "write",
  label: "Write",
  width: 50,
  content: "Write",
  onClick: function() {
    ss.storage.value.push(1);
    console.log("Setting value");
  }
});

text_entry.port.emit("text-storage", ss.storage.value);

// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Import the self API
var self = require("sdk/self");

// Load New Page
pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url("load.js"),
  onAttach: function(worker) {
	worker.port.emit("loadPage",ss.storage.value);
  }
});