chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request.greeting);
	$('.content').css("background", "red");
});

// (function () {
// 	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 		alert("sola");
// 		console.log("request.greeting");
// 		$('.content').css("background", "red");
// 	});
//
// })();
