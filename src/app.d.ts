// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import 'unplugin-icons/types/svelte';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: {
				KV: KVNamespace;
				// DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
		}
	}
}

export {};
