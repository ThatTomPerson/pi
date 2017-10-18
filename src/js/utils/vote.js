export default function (which) {
	if (which === 'woot' && settings.autoWoot.enabled && !$('#meh').is('.selected')) {
		$('#woot')[0].click();
	} else if (which === 'meh' && !$('#woot').is('.selected')) {
		$('#meh')[0].click();
	}
}
