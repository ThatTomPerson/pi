export default class LoadBox {
	constructor() {
		this.status = 1;
		this.dotSubstr = 3;
		this.imgLink = 'https://raw.githubusercontent.com/Plug-It/pi/pre-release/img/other/icon-54.png';
		this.css = `<style id="pi-status-css">
			#pi-status {
				position: absolute;
				top: 65px; right: 355px;
				width: 250px; min-height: 60px;

				background: #1c1f25;
				border-radius: 5px;
				box-shadow: 0 0 3px #000;

				transition: opacity .25s;
				z-index: 1337;
			}
			#pi-status:hover {
				opacity: .2;
			}
			#pi-status .status-icon {
				display: inline-block;
				position: absolute;
				width: 60px; height: 100%;

				background: #111315;
				border-radius: 5px 0 0 5px;
			}
			#pi-status .status-icon img {
				position: absolute;
				top: 0; bottom: 0; left: 0; right: 0;
				max-height: 100%; max-width: 100%;
				width: auto; height: auto;
				margin: auto;
			}
			#pi-status .status-text {
				position: relative;
				top: 0px; left: 60px;
				width: 180px;
				padding: 5px;
			}
		</style>`;
		this.$box = $(
			`<div id="pi-status">
				<div class="status-icon">
					<img src="${this.imgLink}">
				</div>
				<div class="status-text">
					<p>
						<span class="title">Plug-It is loading</span><br>
						<br>
						Status: 0
					</p>
				</div>
			</div>`
		);
	}

	getTitle(withSpan) {
		return `${(withSpan ? '<span class="title">' : '')}`+
			`Plug-It is loading${'...'.substr(this.dotSubstr)}`+
		`${(withSpan ? '</span>' : '')}`;
	}
	append() {
		$('head').append(this.css);
		$('.app-header').after(this.$box);

		this.dotInterval = setInterval(() => {
			this.dotSubstr--;
			this.$box.find('.title').text(this.getTitle());
			if (this.dotSubstr <= 0) this.dotSubstr = 4; // will be 3 on next call
		}, 500);

		return this;
	}
	update(txt) {
		$('#pi-status .status-text p').html(`${this.getTitle(true)}<br>${txt}<br>Status: ${this.status++}`);
		return this;
	}
	remove() {
		this.$box.fadeOut(1000, () => {
			clearInterval(this.dotInterval);
			this.$box.remove();
			$('#pi-status-css').remove();
		});

		return this;
	}
}
