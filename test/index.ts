import test from 'ava';
import {attoid} from '../src';

test('default length', t => {
	const id = attoid();

	t.is(id.length, 21);
});

test('custom length', t => {
	const id = attoid(10);

	t.is(id.length, 10);
});

test('custom dictionary', t => {
	const id = attoid(5, 'a');

	t.is(id, 'aaaaa');
});
