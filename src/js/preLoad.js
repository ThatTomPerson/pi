import LoadBox from './LoadingBox.js';
import ModuleLoader from './ModuleLoader.js';
import extendApi from './extend-api'
import init from './init.js';

function initWhenLoaded(Lang, Ranks, Modules, loadBox) {
	if (typeof Lang !== 'object' || typeof Ranks !== 'object' || typeof Modules !== 'object')
		setTimeout((Lang, Ranks, Modules, loadBox) => initWhenLoaded(Lang, Ranks, Modules, loadBox), 10);
	else
		init(Lang, Ranks, Modules, loadBox);
}

export default function() {
	var loadBox = new LoadBox();
	loadBox.append();

	loadBox.update('Loading languages');
	var Lang;
	switch (API.getUser().language) {
		case 'cs': Lang = 'cs'; break;
		case 'de': Lang = 'de'; break;
		case 'et': Lang = 'et'; break;
		case 'fr': Lang = 'fr'; break;
		case 'nl': Lang = 'nl'; break;
		case 'pl': Lang = 'pl'; break;
		case 'pt': Lang = 'pt'; break;
		case 'sl': Lang = 'sl'; break;
		case 'sv': Lang = 'sv'; break;
		default: Lang = 'en'; break;
	}
	$.ajax({
		dataType: 'json',
		url: `https://rawgit.com/Plug-It/pi/pre-release/lang/${Lang}.json`,
		success: function(data) {
			initWhenLoaded(data, Ranks, Modules, loadBox);
		},
		error: function(e) {
			console.log('[Plug-It] Error while loading translation:\n', e);
			API.chatLog('[Plug-It] Error while loading translation: ' + e.statusText + '. Check the console for more info.');
		}
	});

	loadBox.update('Loading ranks');
	const Ranks = require('../templates/ranks.json');

	loadBox.update('Loading modules');
	const Modules = ModuleLoader();

	loadBox.update('Adding global roles');
	ExtendAPI.init();
}
