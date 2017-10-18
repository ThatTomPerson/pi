import getPIRanks from './utils/getPIRanks.js';
import ROLE from './roles'

export default class Menu {
	constructor(Modules, Lang) {
		this.debug = true;  //process.env.NODE_ENV === 'dev';
		this.modules = Modules;
		this.User = Modules.currentUser;
		let currentUser = this.User.toJSON();
		this.$logo = $(`
			<div id="pi-logo">
				<div id="icon"></div>
			</div>`
		);
		this.$menu = $(`
			<div id="pi-menu" class="app-left" style="display:none;">
				<div id="pi-left-panel">
					<div class="title">Plug-It Settings</div>
					${require('../templates/menu-item/search.html')}
					${require('../templates/menu-item/general.html')}
					${require('../templates/menu-item/customisation.html')}
					${require('../templates/menu-item/notifications.html')}
					${(this.debug || currentUser.role > API.ROLE.DJ || currentUser.gRole > ROLE.PLOT ?
						require('../templates/menu-item/moderation.html') : '')}
					${(this.debug || currentUser.gRole === ROLE.ADMIN ?
						require('../templates/menu-item/admin.html') : '')}
					${(this.debug || currentUser.gRole === ROLE.AMBASSADOR ?
						require('../templates/menu-item/ambassador.html') : '')}
					${(this.debug || currentUser.gRole === ROLE.MODERATOR ?
						require('../templates/menu-item/moderator.html') : '')}
					${(this.debug || currentUser.gRole === ROLE.PLOT ?
						require('../templates/menu-item/plot.html') : '')}
					${(this.debug || currentUser.gRole === ROLE.PROMOTER ?
						require('../templates/menu-item/promoter.html') : '')}
					${(this.debug || getPIRanks(currentUser.id).indexOf('Developer') !== -1 ?
						require('../templates/menu-item/pi-developer.html') : '')}
					${(this.debug || getPIRanks(currentUser.id).indexOf('Ambassador') !== -1 ?
						require('../templates/menu-item/pi-ambassador.html') : '')}
					${(this.debug || getPIRanks(currentUser.id).indexOf('V.I.P.') !== -1 ?
						require('../templates/menu-item/pi-vip.html') : '')}
					${(this.debug || getPIRanks(currentUser.id).indexOf('Translator') !== -1 ?
						require('../templates/menu-item/pi-translator.html') : '')}
					${(this.debug || getPIRanks(currentUser.id).indexOf('Donator') !== -1 ?
						require('../templates/menu-item/pi-donator.html') : '')}
					${(this.debug || getPIRanks(currentUser.id).indexOf('Alpha') !== -1 ?
						require('../templates/menu-item/pi-alpha.html') : '')}
					${require('../templates/menu-item/about.html')}
				</div>

				${require('../templates/menu-panels/search.html')}
				${require('../templates/menu-panels/general.html')}
				${require('../templates/menu-panels/customisation.html')}
				${require('../templates/menu-panels/notifications.html')}
				${(this.debug || currentUser.role > API.ROLE.DJ || currentUser.gRole > ROLE.PLOT ?
					require('../templates/menu-panels/moderation.html') : '')}
				${(this.debug || currentUser.gRole === ROLE.ADMIN ?
					require('../templates/menu-panels/admin.html') : '')}
				${(this.debug || currentUser.gRole === ROLE.AMBASSADOR ?
					require('../templates/menu-panels/ambassador.html') : '')}
				${(this.debug || currentUser.gRole === ROLE.MODERATOR ?
					require('../templates/menu-panels/moderator.html') : '')}
				${(this.debug || currentUser.gRole === ROLE.PLOT ?
					require('../templates/menu-panels/plot.html') : '')}
				${(this.debug || currentUser.gRole === ROLE.PROMOTER ?
					require('../templates/menu-panels/promoter.html') : '')}
				${(this.debug || getPIRanks(currentUser.id).indexOf('Developer') !== -1 ?
					require('../templates/menu-panels/pi-developer.html') : '')}
				${(this.debug || getPIRanks(currentUser.id).indexOf('Ambassador') !== -1 ?
					require('../templates/menu-panels/pi-ambassador.html') : '')}
				${(this.debug || getPIRanks(currentUser.id).indexOf('V.I.P.') !== -1 ?
					require('../templates/menu-panels/pi-vip.html') : '')}
				${(this.debug || getPIRanks(currentUser.id).indexOf('Translator') !== -1 ?
					require('../templates/menu-panels/pi-translator.html') : '')}
				${(this.debug || getPIRanks(currentUser.id).indexOf('Donator') !== -1 ?
					require('../templates/menu-panels/pi-donator.html') : '')}
				${(this.debug || getPIRanks(currentUser.id).indexOf('Alpha') !== -1 ?
					require('../templates/menu-panels/pi-alpha.html') : '')}
				${require('../templates/menu-panels/about.html')}
			</div>
		`);
	}

	init() {
		$('#app').append(this.$logo);
		$('#user-view').after(this.$menu);
		this.change('general');

		this.$logo.on('click', () => {
			!this.showing ? this.show() : this.hide();
		});
		$('#footer-user .back').on('click', () => {
			if (this.showing) this.hide();
		});
		this.$menu.on('click', '.item', (element) => {
			let which = $(element.target).closest('.item').attr('data-value');
			this.change(which);
		});

		this.resizeBind = _.bind(this.onResize, this);
		this.showBind = _.bind(this.onShow, this);
		this.hideBind = _.bind(this.onHide, this);
		this.showing = false;
	}
	show() {
		this.modules.window.resize(this.resizeBind);
		this.$menu.show().animate(
			{left: 0},
			{duration: 250, easing: 'easeInOutExpo', complete: this.showBind}
		);
		$('#footer-user').addClass('showing');
		$('#footer-user .back span').text('Back To Community');

		this.modules.Events
			.trigger('audience:pause', true)
				.trigger('dashboard:disable', true);
	}
	hide(noAnimation) {
		if (this.showing) {
			this.showing = false;
			this.modules.window.off('resize', this.resizeBind);
			$('#footer-user').removeClass('showing');
			if (noAnimation !== true) {
				this.$menu.animate(
					{left: -this.$menu.width()},
					{duration: 250, easing: 'easeInOutExpo', complete: this.hideBind}
				);
			} else {
				this.$menu.css('left', -this.$menu.width());
				this.onHide();
			}
		}
	}
	quickHide() {
		this.hide(true);
	}
	resize() {
		this.$menu
			.css('left', this.menu.$el.width())
			.width(size.availWidth - this.menu.$el.width());
	}
	reset() {
		$('#pi-left-panel .item.selected').toggleClass('selected');
		$('#pi-left-panel ~ div').removeClass('selected');
	}
	change(which) {
		this.reset();
		$('#pi-left-panel .item.'+which).toggleClass('selected')
		$('#pi-menu #'+which+'-settings').addClass('selected');
	}
	onShow() {
		this.showing = true;
		_.defer(_.bind(this.onResize, this));
	}
	onHide() {
		this.$menu.hide();
		this.modules.Events.trigger('audience:pause', false).trigger('dashboard:disable', false);
	}
	onResize(size) {
		size = size || this.modules.window.getSize();
		this.$menu.height(size.height - size.barHeight);
		if (this.showing) this.$menu.css('left', 0);
		else this.$menu.css('left', -size.availWidth);
	}
	kill() {
		this.$logo.remove();
		this.$menu.remove();
	}
}
