import {randomInt} from 'crypto';

/**
 * Generate a unique and URL-friendly string.
 *
 * @param {number=21} length - Length of the generated string, defaults to 21 characters.
 * @param {number='aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890-._~'} dictionary - Custom dictionary, from which the string should be generated.
 * @return {string} Random string.
 *
 * @example
 * attoid();
 * attoid(10);
 */
export const attoid = (length = 21, dictionary = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890-._~'): string => {
	let id = '';

	while (length--) {
		id += dictionary[randomInt(dictionary.length)];
	}

	return id;
};
