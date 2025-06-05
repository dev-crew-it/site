
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
	export const npm_command: string;
	export const LSCOLORS: string;
	export const USER_ZDOTDIR: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XPC_FLAGS: string;
	export const NIX_BUILD_CORES: string;
	export const NIX_GCROOT: string;
	export const DISABLE_AUTO_UPDATE: string;
	export const TERM_PROGRAM_VERSION: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const shell: string;
	export const __sandboxProfile: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const __CFBundleIdentifier: string;
	export const SSH_AUTH_SOCK: string;
	export const MallocNanoZone: string;
	export const STRINGS: string;
	export const depsTargetTarget: string;
	export const TERM_SESSION_ID: string;
	export const stdenv: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const builder: string;
	export const HOMEBREW_PREFIX: string;
	export const RBENV_SHELL: string;
	export const __ETC_PROFILE_NIX_SOURCED: string;
	export const shellHook: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const phases: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const LOGNAME: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const __propagatedSandboxProfile: string;
	export const npm_config_init_module: string;
	export const LaunchInstanceID: string;
	export const CXX: string;
	export const _: string;
	export const TEMPDIR: string;
	export const system: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOST_PATH: string;
	export const VSCODE_INJECTION: string;
	export const COMMAND_MODE: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const NIX_BINTOOLS: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const NIX_DONT_SET_RPATH: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const SECURITYSESSIONID: string;
	export const cmakeFlags: string;
	export const NIX_SSL_CERT_FILE: string;
	export const LD_DYLD_PATH: string;
	export const outputs: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const GIT_ASKPASS: string;
	export const LD: string;
	export const buildPhase: string;
	export const INIT_CWD: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const NIX_DONT_SET_RPATH_FOR_BUILD: string;
	export const npm_config_npm_version: string;
	export const __propagatedImpureHostDeps: string;
	export const depsBuildBuild: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const NIX_NO_SELF_RPATH: string;
	export const ZSH: string;
	export const PATH_LOCALE: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const npm_config_prefix: string;
	export const ZDOTDIR: string;
	export const USER: string;
	export const strictDeps: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const HOMEBREW_CELLAR: string;
	export const AR: string;
	export const AS: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
	export const TEMP: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const __impureHostDeps: string;
	export const patches: string;
	export const NIX_IGNORE_LD_THROUGH_GCC: string;
	export const HOMEBREW_REPOSITORY: string;
	export const buildInputs: string;
	export const preferLocalBuild: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const LC_CTYPE: string;
	export const depsBuildTarget: string;
	export const out: string;
	export const npm_package_json: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const STRIP: string;
	export const XDG_DATA_DIRS: string;
	export const TMP: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_node_gyp: string;
	export const dontAddDisableDepTrack: string;
	export const CC: string;
	export const CI: string;
	export const NIX_CC: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const npm_config_global_prefix: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const NIX_HARDENING_ENABLE: string;
	export const __darwinAllowLocalNetworking: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const CURSOR_TRACE_ID: string;
	export const depsHostHostPropagated: string;
	export const NODE_ENV: string;
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
		npm_command: string;
		LSCOLORS: string;
		USER_ZDOTDIR: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		npm_config_cache: string;
		LESS: string;
		XPC_FLAGS: string;
		NIX_BUILD_CORES: string;
		NIX_GCROOT: string;
		DISABLE_AUTO_UPDATE: string;
		TERM_PROGRAM_VERSION: string;
		configureFlags: string;
		mesonFlags: string;
		shell: string;
		__sandboxProfile: string;
		depsHostHost: string;
		NODE: string;
		__CFBundleIdentifier: string;
		SSH_AUTH_SOCK: string;
		MallocNanoZone: string;
		STRINGS: string;
		depsTargetTarget: string;
		TERM_SESSION_ID: string;
		stdenv: string;
		COLOR: string;
		npm_config_local_prefix: string;
		builder: string;
		HOMEBREW_PREFIX: string;
		RBENV_SHELL: string;
		__ETC_PROFILE_NIX_SOURCED: string;
		shellHook: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		phases: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		PWD: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		LOGNAME: string;
		NIX_ENFORCE_NO_NATIVE: string;
		__propagatedSandboxProfile: string;
		npm_config_init_module: string;
		LaunchInstanceID: string;
		CXX: string;
		_: string;
		TEMPDIR: string;
		system: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOST_PATH: string;
		VSCODE_INJECTION: string;
		COMMAND_MODE: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		NIX_BINTOOLS: string;
		LANG: string;
		LS_COLORS: string;
		NIX_DONT_SET_RPATH: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		SECURITYSESSIONID: string;
		cmakeFlags: string;
		NIX_SSL_CERT_FILE: string;
		LD_DYLD_PATH: string;
		outputs: string;
		NIX_STORE: string;
		TMPDIR: string;
		GIT_ASKPASS: string;
		LD: string;
		buildPhase: string;
		INIT_CWD: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		NIX_DONT_SET_RPATH_FOR_BUILD: string;
		npm_config_npm_version: string;
		__propagatedImpureHostDeps: string;
		depsBuildBuild: string;
		TERM: string;
		npm_package_name: string;
		NIX_NO_SELF_RPATH: string;
		ZSH: string;
		PATH_LOCALE: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		npm_config_prefix: string;
		ZDOTDIR: string;
		USER: string;
		strictDeps: string;
		VSCODE_GIT_IPC_HANDLE: string;
		HOMEBREW_CELLAR: string;
		AR: string;
		AS: string;
		NIX_CC_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
		TEMP: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NIX_BUILD_TOP: string;
		NM: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		__impureHostDeps: string;
		patches: string;
		NIX_IGNORE_LD_THROUGH_GCC: string;
		HOMEBREW_REPOSITORY: string;
		buildInputs: string;
		preferLocalBuild: string;
		XPC_SERVICE_NAME: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		LC_CTYPE: string;
		depsBuildTarget: string;
		out: string;
		npm_package_json: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		STRIP: string;
		XDG_DATA_DIRS: string;
		TMP: string;
		npm_config_noproxy: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_node_gyp: string;
		dontAddDisableDepTrack: string;
		CC: string;
		CI: string;
		NIX_CC: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_apple_darwin: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		npm_config_global_prefix: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		NIX_HARDENING_ENABLE: string;
		__darwinAllowLocalNetworking: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		__CF_USER_TEXT_ENCODING: string;
		name: string;
		TERM_PROGRAM: string;
		CURSOR_TRACE_ID: string;
		depsHostHostPropagated: string;
		NODE_ENV: string;
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
