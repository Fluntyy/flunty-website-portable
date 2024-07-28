const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","favicon_dark.svg","icon/discord.svg","icon/email.svg","icon/genshin-impact.svg","icon/github.svg","icon/minecraft.svg","icon/portal.svg","icon/steam.svg","icon/twitter.svg","icon/x.svg","icon/youtube.svg","moon.svg","mountain/1.svg","mountain/2.svg","mountain/3.svg","mountain/4.svg","mountain/dark/1.svg","mountain/dark/2.svg","mountain/dark/3.svg","mountain/dark/4.svg","styles/about.css","styles/home.css","styles/socials.css","sun.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.m9nwBmeI.js","app":"_app/immutable/entry/app.BoGdakfv.js","imports":["_app/immutable/entry/start.m9nwBmeI.js","_app/immutable/chunks/entry.DBFy1WVT.js","_app/immutable/chunks/8.CFjWnMlY.js","_app/immutable/chunks/index.B-uIOJ_6.js","_app/immutable/entry/app.BoGdakfv.js","_app/immutable/chunks/8.CFjWnMlY.js","_app/immutable/chunks/index.D7oZ8J2Q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BoDsMwGe.js')),
			__memo(() => import('./chunks/1-FfB9PC4G.js')),
			__memo(() => import('./chunks/2-CaPnSTUU.js')),
			__memo(() => import('./chunks/3-DedRuc3n.js')),
			__memo(() => import('./chunks/4-BR2ueeNW.js')),
			__memo(() => import('./chunks/5-BqKNt9Sr.js')),
			__memo(() => import('./chunks/6-HGaqObM0.js')),
			__memo(() => import('./chunks/7-l5qXdb5a.js')),
			__memo(() => import('./chunks/8-DKsKA4uV.js')),
			__memo(() => import('./chunks/9-ClDoS4mm.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/links/discord",
				pattern: /^\/links\/discord\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/links/github",
				pattern: /^\/links\/github\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/links/steam",
				pattern: /^\/links\/steam\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/links/x",
				pattern: /^\/links\/x\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/links/youtube",
				pattern: /^\/links\/youtube\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/socials",
				pattern: /^\/socials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
