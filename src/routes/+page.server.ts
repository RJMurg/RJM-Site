import type { PageServerLoad } from './$types';

export const load = () => {
	return {
		hello: 'hello world!'
	};
}) satisfies PageServerLoad;