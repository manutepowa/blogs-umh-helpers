chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request.greeting);
	var saltosLinea = "&nbsp;</ br>&nbsp;</ br>&nbsp;</ br>\n";

	$('textarea#content').text(function () {
		var cursorPos = $(this).prop('selectionStart');
		var v = $(this).val();
		var textBefore = v.substring(0, cursorPos);
		var textAfter = v.substring(cursorPos, v.length);
		$(this).val(textBefore + saltosLinea + textAfter);
	});
});
