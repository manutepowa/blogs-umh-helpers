chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request.greeting);
	var saltosLinea = "&nbsp;</ br>&nbsp;</ br>&nbsp;</ br>\n";
	var audio = "[audio:(((URL de AUDIO)))|titles=(((TITULO)))]";
	var imagen = "[nggallery id=000]";

	if (request.greeting == "sl") {
		$('textarea#ppqtrans_textarea_content').text(function () {
			var cursorPos = $(this).prop('selectionStart');
			var v = $(this).val();
			var textBefore = v.substring(0, cursorPos);
			var textAfter = v.substring(cursorPos, v.length);
			$(this).val(textBefore + saltosLinea + textAfter);
		});
	} else if (request.greeting == "ad") {
		$('textarea#ppqtrans_textarea_content').text(function () {
			var cursorPos = $(this).prop('selectionStart');
			var v = $(this).val();
			var textBefore = v.substring(0, cursorPos);
			var textAfter = v.substring(cursorPos, v.length);
			$(this).val(textBefore + audio + textAfter);
		});
	} else if (request.greeting == "im") {
		$('textarea#ppqtrans_textarea_content').text(function () {
			var cursorPos = $(this).prop('selectionStart');
			var v = $(this).val();
			var textBefore = v.substring(0, cursorPos);
			var textAfter = v.substring(cursorPos, v.length);
			$(this).val(textBefore + imagen + textAfter);
		});
	}

});
