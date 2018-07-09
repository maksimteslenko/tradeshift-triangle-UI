'use strict';
const expect = require('chai').expect;
const getTriangleTypes = require('../test/getTriangleType');

describe('getTriangleTypes()', () => {
	it('should be equilateral', () => {

		//1. ARRANGE
		const sidesArray=['5','5','5'];
		const expectedResult = 'equilateral';

		//2. ACT
		const testResult = getTriangleTypes(sidesArray);

		//3.ASSERT
		expect(testResult).to.be.equal(expectedResult);
	});
});

describe('getTriangleTypes()', () => {
	it('should be scalene', () => {

		//1. ARRANGE
		const sidesArray=['3','4','5'];
		const expectedResult = 'scalene';

		//2. ACT
		const testResult = getTriangleTypes(sidesArray);

		//3.ASSERT
		expect(testResult).to.be.equal(expectedResult);
	});
});

describe('getTriangleTypes()', () => {
	it('should be isosceles', () => {

		//1. ARRANGE
		const sidesArray=['4','4','5'];
		const expectedResult = 'isosceles';

		//2. ACT
		const testResult = getTriangleTypes(sidesArray);

		//3.ASSERT
		expect(testResult).to.be.equal(expectedResult);
	});
});


