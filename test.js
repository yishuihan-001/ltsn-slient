import test from 'ava';
import ltsnSlient from '.';

test('title', t => {
	t.throws(() => {
		ltsnSlient(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(ltsnSlient('unicorns'), 'unicorns & rainbows');
});
