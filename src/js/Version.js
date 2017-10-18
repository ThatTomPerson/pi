const version = require('../version.js');

export default class Version {
	constructor() {
		for (let key in version) {
			this[key] = version[key];
		}
	}

	getSemVer() {
		let semVer = '';

		if (this.dev) semVer += `-dev.${this.dev}+${this.build}`;
		if (this.alpha) semVer += '-alpha.'+this.alpha;
		if (this.prerelease) semVer += '.'+this.prerelease;

		return semVer;
	}

	toString() {
		return `${this.major}.${this.minor}.${this.patch}${this.getSemVer()}`;
	}
}
