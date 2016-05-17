var parent = chrome.contextMenus.create({
	"title": "Ayuda blog Comunicación",
	"contexts": [
		"editable"
	],
});

var saltosLinea = chrome.contextMenus.create({
	"title": "Saltos de línea",
	"parentId": parent,
	"contexts": [
		"editable"
	],
	"onclick": fSaltoLinea
});

var audio = chrome.contextMenus.create({
	"title": "Etiqueta audio",
	"parentId": parent,
	"contexts": [
		"editable"
	],
	"onclick": fAudio
});

var gimagen = chrome.contextMenus.create({
	"title": "Galería imagen",
	"parentId": parent,
	"contexts": [
		"editable"
	],
	"onclick": fimagen
});

function fSaltoLinea(data) {
	// chrome.extension.sendMessage({ greeting: "hello" }, function (response) {});
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { greeting: "sl" }, function (response) {
			// console.log(response.farewell);
		});
	});
}

function fAudio(data) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { greeting: "ad" }, function (response) {
			// console.log(response.farewell);
		});
	});
}

function fimagen(data) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { greeting: "im" }, function (response) {
			// console.log(response.farewell);
		});
	});
}
