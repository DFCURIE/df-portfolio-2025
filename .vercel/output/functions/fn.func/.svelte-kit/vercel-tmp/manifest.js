export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/imgs/Vector 1.svg","assets/imgs/footer-logo.svg","assets/imgs/home-back.jpg","assets/imgs/logo.svg","assets/imgs/profile-photo.png","assets/imgs/scroll_arrow.png","assets/imgs/svg-icons/android.svg","assets/imgs/svg-icons/firebase.svg","assets/imgs/svg-icons/flutter.svg","assets/imgs/svg-icons/gcp.svg","assets/imgs/svg-icons/iOS.svg","assets/imgs/svg-icons/nodejs.svg","assets/imgs/svg-icons/php.svg","assets/imgs/svg-icons/react.svg","assets/imgs/svg-icons/svelte.svg","assets/imgs/work-back/3da/cover.jpg","assets/imgs/work-back/adm/cover.jpg","assets/imgs/work-back/apre/cover.jpg","assets/imgs/work-back/cui/cover.jpg","assets/imgs/work-back/lms/cover.jpg","assets/imgs/work-back/opt/cover.jpg","assets/imgs/work-back/swp/cover.jpg","data/data.json","data/work-data.json","favicon.ico","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.U6vfNGgx.js",app:"_app/immutable/entry/app.rU1EB5Bn.js",imports:["_app/immutable/entry/start.U6vfNGgx.js","_app/immutable/chunks/osYtoux8.js","_app/immutable/entry/app.rU1EB5Bn.js","_app/immutable/chunks/osYtoux8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
