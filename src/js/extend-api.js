
export function init() {
	API.GLOBAL_ROLE = {
		ADMIN: 5000,
		AMBASSADOR: 3000,
		MODERATOR: 2500,
		PLOT: 750,
		PROMOTER: 500
	}

}

export function destory() {
	API.GLOBAL_ROLE = null
}
