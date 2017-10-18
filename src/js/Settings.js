const defaultSettings = require('../templates/settings.js');

export default class Settings {
	constructor() {
		this.name = 'Plug-It-settings';
		this.defaultSettings = defaultSettings;
	}

	load() {
		if (!window.localStorage[this.name]) {
			for (var key in this.defaultSettings) {
				this[key] = this.defaultSettings[key];
			}
		} else {
			let settings = JSON.parse(window.localStorage[this.name]);
			settings = $.extend({}, this.defaultSettings, settings);

			for (var key in settings) {
				this[key] = settings[key];
			}
		}
	}
	save() {
		window.localStorage[this.name] = JSON.stringify(pi.settings);
	}
}
