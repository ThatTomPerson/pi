import preLoad from './js/Preload.js';

(function load() {
	if (location.host.indexOf('plug.dj') < 0) return;

	function plugReady() {
		return typeof API !== 'undefined' && API.enabled && typeof jQuery !== 'undefined' && typeof require !== 'undefined';
	}
	function isPlugRoom() {
		return $('.room-background').length > 0;
	}

	if (plugReady()) {
		if (isPlugRoom()) {
			if (typeof pi !== 'undefined') pi.kill();
			preLoad();
		} else {
			(function waitForARoom() {
				if (!isPlugRoom()) setTimeout(() => waitForARoom(), 1000);
				else load();
			})();
		}
	}
	else setTimeout(load, 10);
})();
