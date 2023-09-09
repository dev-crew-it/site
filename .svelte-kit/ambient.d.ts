
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const SESSION_MANAGER: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const NIX_BUILD_CORES: string;
	export const NVM_INC: string;
	export const NIX_GCROOT: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const GNOME_KEYRING_CONTROL: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_DATA_HOME: string;
	export const STRINGS: string;
	export const ZSH_2000_DISABLE_RIGHT_PROMPT: string;
	export const XDG_CONFIG_HOME: string;
	export const depsTargetTarget: string;
	export const stdenv: string;
	export const npm_config_local_prefix: string;
	export const builder: string;
	export const DESKTOP_SESSION: string;
	export const shellHook: string;
	export const FLUTTER_HOME: string;
	export const GPG_TTY: string;
	export const phases: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const PNPM_HOME: string;
	export const CXX: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const TEMPDIR: string;
	export const system: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const HOST_PATH: string;
	export const MOTD_SHOWN: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const NIX_BINTOOLS: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const VTE_VERSION: string;
	export const cmakeFlags: string;
	export const NIX_SSL_CERT_FILE: string;
	export const outputs: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const XDG_SEAT_PATH: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const LD: string;
	export const buildPhase: string;
	export const ANDROID_NDK_HOME: string;
	export const READELF: string;
	export const XDG_CACHE_HOME: string;
	export const INFOPATH: string;
	export const doCheck: string;
	export const NVM_DIR: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const ANDROID_HOME: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const USER: string;
	export const strictDeps: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const AR: string;
	export const AS: string;
	export const TEMP: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const GUIX_LOCPATH: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const ANDROID_SDK_ROOT: string;
	export const patches: string;
	export const XDG_VTNR: string;
	export const DESKTOP_AUTOSTART_ID: string;
	export const buildInputs: string;
	export const XDG_SESSION_ID: string;
	export const preferLocalBuild: string;
	export const npm_config_user_agent: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const DEBUGINFOD_URLS: string;
	export const out: string;
	export const npm_package_json: string;
	export const STRIP: string;
	export const GTK3_MODULES: string;
	export const XDG_DATA_DIRS: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const dontAddDisableDepTrack: string;
	export const GDMSESSION: string;
	export const CC: string;
	export const CI: string;
	export const NIX_CC: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const MAIL: string;
	export const NVM_BIN: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const NIX_HARDENING_ENABLE: string;
	export const NIX_LDFLAGS: string;
	export const GOPATH: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const ZSH_2000_DEFAULT_USER: string;
	export const depsHostHostPropagated: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		SESSION_MANAGER: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		NIX_BUILD_CORES: string;
		NVM_INC: string;
		NIX_GCROOT: string;
		GNOME_DESKTOP_SESSION_ID: string;
		configureFlags: string;
		mesonFlags: string;
		GNOME_KEYRING_CONTROL: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		SSH_AUTH_SOCK: string;
		XDG_DATA_HOME: string;
		STRINGS: string;
		ZSH_2000_DISABLE_RIGHT_PROMPT: string;
		XDG_CONFIG_HOME: string;
		depsTargetTarget: string;
		stdenv: string;
		npm_config_local_prefix: string;
		builder: string;
		DESKTOP_SESSION: string;
		shellHook: string;
		FLUTTER_HOME: string;
		GPG_TTY: string;
		phases: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		PNPM_HOME: string;
		CXX: string;
		_: string;
		XAUTHORITY: string;
		TEMPDIR: string;
		system: string;
		XDG_GREETER_DATA_DIR: string;
		HOST_PATH: string;
		MOTD_SHOWN: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		NIX_BINTOOLS: string;
		LANG: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		VTE_VERSION: string;
		cmakeFlags: string;
		NIX_SSL_CERT_FILE: string;
		outputs: string;
		NIX_STORE: string;
		TMPDIR: string;
		XDG_SEAT_PATH: string;
		GNOME_TERMINAL_SCREEN: string;
		LD: string;
		buildPhase: string;
		ANDROID_NDK_HOME: string;
		READELF: string;
		XDG_CACHE_HOME: string;
		INFOPATH: string;
		doCheck: string;
		NVM_DIR: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		ANDROID_HOME: string;
		TERM: string;
		npm_package_name: string;
		ZSH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		USER: string;
		strictDeps: string;
		GNOME_TERMINAL_SERVICE: string;
		AR: string;
		AS: string;
		TEMP: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		NIX_BUILD_TOP: string;
		NM: string;
		GUIX_LOCPATH: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		ANDROID_SDK_ROOT: string;
		patches: string;
		XDG_VTNR: string;
		DESKTOP_AUTOSTART_ID: string;
		buildInputs: string;
		XDG_SESSION_ID: string;
		preferLocalBuild: string;
		npm_config_user_agent: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		DEBUGINFOD_URLS: string;
		out: string;
		npm_package_json: string;
		STRIP: string;
		GTK3_MODULES: string;
		XDG_DATA_DIRS: string;
		TMP: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		dontAddDisableDepTrack: string;
		GDMSESSION: string;
		CC: string;
		CI: string;
		NIX_CC: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		MAIL: string;
		NVM_BIN: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		NIX_HARDENING_ENABLE: string;
		NIX_LDFLAGS: string;
		GOPATH: string;
		nativeBuildInputs: string;
		name: string;
		ZSH_2000_DEFAULT_USER: string;
		depsHostHostPropagated: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
