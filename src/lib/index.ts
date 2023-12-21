// place files you want to import through the `$lib` alias in this folder.

export type MonitorTest = {
	timestamp: number;
	duration: number;
	successful: boolean;
};

export type MonitorStatus = {
	title: string;
	displayedURL: string;
	testURL: string;

	checks: MonitorTest[];
};

export function unwrap_or<T>(value: T | undefined, fallback: T): T {
	if (value === undefined) {
		return fallback;
	} else {
		return value;
	}
}
