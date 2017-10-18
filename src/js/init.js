import Version from './Version.js';
import Settings from './Settings.js';
import Menu from './Menu.js';
import ROLE from './roles'
import getPIRanks from './utils/getPIRanks.js';
import vote from './utils/vote.js';

export default function init(Lang, Ranks, Modules, loadBox) {
	loadBox.update('Creating Script Environement');
	const START_TIME = new Date().getTime();
	const DELAY = (API.getUser().gRole >= ROLE.AMBASSADOR ? 200 : 3500);
	const CHAT_INTERCEPT_STRING = `Plug-It Socket Intercept: ${Math.random()}`;
	const YT_API_KEY = 'AIzaSyC8pk0f57a_UcAIbHdrvRhsmHSG1KZk2SM';
	const URL = require('../templates/links.js');
	var roomSettings = {};
	var cooldown = {
		'afkResponder': START_TIME - 60*1000,
		'voteShortcut': START_TIME - 5000
	};
	var emotes = {};
	var session = {
		unread: false, // used to notify on unread messages + window blurred
		floodAPI: false,
		woots: API.getUsers().filter(x => x.vote == 1),
		grabs: API.getUsers().filter(x => x.grab),
		mehs:  API.getUsers().filter(x => x.vote == -1),
		chat: []
	};

	window.pi = {
		version: new Version(),
		settings: new Settings(),
		utils: {
			getPIRanks: getPIRanks,
			vote: vote
		},
		menu: new Menu(Modules, Lang),
		init: () => {
			pi.settings.load();

			loadBox.update('Creating menu');
			$('head').append($(`<style id="pi-menu-css">${require('../css/new-menu.css')}</style>`));
			pi.menu.init();

			API.chatLog(`Plug-It V${pi.version} loaded! ${(new Date().getTime() - START_TIME)}ms`);
			loadBox.update('Finished loading!');
			loadBox.remove();
			pi.init = undefined;
		},
		kill: () => {
			$('#pi-menu-css').remove();
			pi.menu.kill();

			pi = undefined;
		}
	};

	pi.init();
}
