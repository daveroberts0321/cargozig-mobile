declare namespace svelteHTML {
	interface HTMLAttributes<T> {
			[key: string]: any;
	}
}

declare global {
	namespace App {
			interface Locals {}
			interface PageData {}
			interface Error {}
			interface Platform {}
	}
}

export {};
