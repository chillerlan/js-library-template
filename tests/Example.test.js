/**
 * @created      03.07.2024
 * @author       smiley <smiley@chillerlan.net>
 * @copyright    2024 smiley
 * @license      MIT
 */

import {beforeEach, suite, test} from 'mocha';
import {assert} from 'chai';
import {Example} from '../src/index.js';

suite('ExampleTest', function(){

	let _example;

	beforeEach(function(){
		_example = new Example();
	});

	test('instance', function(){
		assert.instanceOf(_example, Example);
	});

	test('doThing', function(){
		assert.strictEqual(_example.doThing(), 'yay!');
	});

});
