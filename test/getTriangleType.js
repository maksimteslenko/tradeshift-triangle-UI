function getTriangleType(sides) {
	const a = sides[0];
	const b = sides[1];
	const c = sides[2];
	if (a != b && b != c && c != a) {
		return 'scalene';
	} else if (a == b && b == c && c == a ) {
		return 'equilateral';

	} else {
		return 'isosceles';
	}
}

module.exports = getTriangleType;