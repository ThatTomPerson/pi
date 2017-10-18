const Ranks = require('../../templates/ranks.json');

export default function(id) {
	let result = [];
	if (!id) id = API.getUser().id;

	for (let rank in Ranks) {
		for (let users in Ranks[rank]) {
			// Sub-ranks
			if (typeof Ranks[rank][users] === "object") {
				for (let users2 in Ranks[rank][users]) {
					if (id == Ranks[rank][users][users2]) {
						result.push(rank);
						result.push(users);
					}
				}
			}

			if (id == Ranks[rank][users]) result.push(rank);
		}
	}

	// Self assignable roles
	// if (settings.bot.indexOf(id) !== -1) result.push('Bot');
	// if (settings.discordbot.indexOf(id) !== -1) result.push('Discord Bot');

	return result;
}
