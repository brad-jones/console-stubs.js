QUnit.test("console.log", function(assert)
{
	assert.ok(window.console.log, 'console.log exists globally.');

	assert.ok(typeof window.console.log === 'function', 'console.log is a function.');
});