module.exports = {
	// General
	autoWoot: {
		enabled: true,
		delay: {
			enabled: true,
			min: 5,
			max: 30
		}
	},
	autoJoin: true,
	autoLeave: {
		enabled: false,
		turns: 1
	},
	keyboardShortcuts: false,
	chatCommands: true,
	eta: false,
	muteOnMeh: false,
	navWarn: true,
	afk: {
		enabled: false,
		onlyDirectMentions: true,
		message: 'Currently unavailable, will be back soon!'
	},
	voteList: {
		enabled: false,
		orderBy: 'rank' //abc, time
	},
	scriptMessages: {
		inChat: true,
		autoHide: {
			enabled: false,
			delay: 15
		}
	},
	betterClearChatLimit: 5,
	chatLimit: 512,
	languageFlags: false,
	queuedHistory: false,
	// Esthetics / Styling
	playback: {
		hidden: false,
		soundCloudAnimations: false
	},
	background: {
		enabled: false,
		image: "",
		size: {
			x: 1600,
			y: 900
		}
	},
	styles: {
		roomTheme: {
			enabled: false,
			ranks: false
		},
		plugItStyle: false,
		plugItRanks: false,
		oldChat: false,
		oldFooter: false,
		smallHistory: false,
		smallCards: false,
		smallFriends: false,
		customCSS: {
			enabled: false,
			liveUpdate: false,
			autoSave: false
		}
	},
	chatColor: {
		enabled: false,
		admin: '',
		ba: '',
		host: '',
		cohost: '',
		manager: '',
		bouncer: '',
		residentDJ: '',
		sub: '',
		silver: '',
		friend: '',
		user: ''
	},
	emojis: {
		size: 16,
		sheet: 'apple',
		jomboji: false,
		tooltip: false
	},
	// Chat
	autoComplete: {
		emojis: false,
		commands: false
	},
	embeds: {
		youtubePreviews: false,
		images: {
			enabled: false,
			maxSize: 1024,
			largePreview: false
		}
	},
	customEmotes: {
		twitch: false,
		twitchSubs: false,
		BTTV: false,
		tastycat: false
	},
	mentions: {
		enabled: false,
		keywords: []
	},
	highlighUsernames: false,
	markdown: false,
	nickname: {
		enabled: false,
		users: {
			"4613422": "WiBla [PI-Dev]"
		}
	},
	bot: [5285179],
	discordbot: [20852061],
	// Notifications
	desktopNotifications: {
		enabled: false,
		mention: false,
		booth: false,
		ownPlay: false,
		DJScore: false,
		gifted: false
	},
	friendStatus: {
		totalOnline: true,
		connect: false,
		disconnect: false,
		roomChange: false,
		unfriend: false,
		whitelist: {
			enabled: false,
			list: [
				// ╔════════════════════════════════════════════════════╗
				// ║ ID  | Connect | Disconnect | roomChange | Unfriend ║
				// ║ 123 |    0    |      0     |      0     |     1    ║
				// ╚════════════════════════════════════════════════════╝
				[3537523,  false,      false   ,    false   ,   false   ],
			]
		},
		blacklist: {
			enabled: false,
			list: [
				// ╔════════════════════════════════════════════════════╗
				// ║ ID  | Connect | Disconnect | roomChange | Unfriend ║
				// ║ 123 |    0    |      0     |      0     |     1    ║
				// ╚════════════════════════════════════════════════════╝
				[3537523,  false,      false   ,    false   ,   false   ],
			]
		}
	},
	songStats: false,
	join: {
		admin: false,
		ba: false,
		staff: false,
		friend: false,
		user: false,
		lvl1: false,
		guest: false
	},
	leave: {
		admin: false,
		ba: false,
		staff: false,
		friend: false,
		user: false,
		lvl1: false,
		guest: false
	},
	woot: {
		staff: false,
		friend: false,
		user: false,
	},
	grab: {
		staff: false,
		friend: false,
		user: false,
	},
	meh: {
		staff: false,
		friend: false,
		user: false,
	},
	booth: {
		enabled: false,
		position: 3
	},
	gain: {
		xp: {
			enabled: false,
			minimum: 1
		},
		pp: {
			enabled: false,
			minimum: 2
		}
	},
	levelUp: {
		enabled: false,
		minLevel: 5
	},
	// Moderation
	deletedChat: false,
	deleteConfirmation: false,
	inlineUserInfo: false,
	voteRatio: {
		enabled: false,
		score: 1
	},
	mehSpam: {
		enabled: false,
		count: 3
	},
	verifyMedia: {
		forceSkip: {
			enabled: false,
			message: {
				enabled: false,
				content: ''
			}
		},
		duration: {
			enabled: false,
			max: 420, // Blaze-it
			skip: false,
		},
		inHistory: {
			enabled: false,
			skip: false
		},
		unavailable: {
			enabled: false,
			skip: false
		},
		private: {
			enabled: false,
			skip: false
		},
		countryRestricted: {
			enabled: false,
			skip: {
				always: false,
				minScore: 10,
			},
			countries: {
				"france": 10
			}
		}
	},
	// BA
	deleteOwnCmds: true,
	trollRolloverAction: false
};
