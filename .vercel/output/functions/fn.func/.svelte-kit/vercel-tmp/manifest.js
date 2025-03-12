export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/imgs/footer-logo.svg","assets/imgs/home-back.jpg","assets/imgs/logo.svg","assets/imgs/profile-photo.jpg","assets/imgs/scroll_arrow.png","assets/imgs/signature-white.png","assets/imgs/svg-icons/android.svg","assets/imgs/svg-icons/firebase.svg","assets/imgs/svg-icons/flutter.svg","assets/imgs/svg-icons/gcp.svg","assets/imgs/svg-icons/iOS.svg","assets/imgs/svg-icons/nodejs.svg","assets/imgs/svg-icons/php.svg","assets/imgs/svg-icons/react.svg","assets/imgs/svg-icons/svelte.svg","assets/imgs/work-back/grillzzy/cover.jpg","assets/imgs/work-back/kic/cover.jpg","assets/imgs/work-back/kwa/cover.jpg","assets/imgs/work-back/lcml/cover.jpg","assets/imgs/work-back/slickscroll/cover.jpg","assets/imgs/work-back/v1/cover.jpg","data/data.json","data/work-data.json","favicon.ico","robots.txt","sitemap.xml"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.tyYpgu-z.js",app:"_app/immutable/entry/app.WU_71Fu6.js",imports:["_app/immutable/entry/start.tyYpgu-z.js","_app/immutable/chunks/rbvzsvWe.js","_app/immutable/entry/app.WU_71Fu6.js","_app/immutable/chunks/rbvzsvWe.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
