var parent = chrome.contextMenus.create({
	"title": "Ayuda blog Comunicación"
});

var saltosLinea = chrome.contextMenus.create({
	"title": "Saltos de línea",
	"parentId": parent,
	"contexts": [
		"page"
	],
	"onclick": fSaltoLinea
});

var audio = chrome.contextMenus.create({
	"title": "Etiqueta audio",
	"parentId": parent,
	"contexts": [
		"page"
	],
	"onclick": fAudio
});

function fSaltoLinea(data) {
	// chrome.extension.sendMessage({ greeting: "hello" }, function (response) {});
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
			console.log(response.farewell);
		});
	});
}

function fAudio(data) {
	console.log(data);
}
