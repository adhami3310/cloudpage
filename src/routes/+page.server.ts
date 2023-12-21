import type { MonitorStatus } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	return {
		status: await platform!.env.CLOUDPAGE.get<MonitorStatus[]>('monitors', 'json')
	};
};
