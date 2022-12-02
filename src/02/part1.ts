import { readFileSync } from 'fs'

const testData = `2x3x4
1x1x10`

const expected = 58 + 43

console.log(
	`Example Input Solution = ${expected}, got: ${solution(testData)}`,
	solution(testData) === expected
)
console.log(
	'Full Input Solution',
	solution(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function area(l: number, w: number, h: number) {
	return 2 * l * w + 2 * w * h + 2 * h * l
}

function min(l: number, w: number, h: number) {
	return [l * w, l * h, w * h].sort((a, b) => a - b)[0]
}

function solution(input: string): any {
	return input
		.split('\n')
		.map((r) => r.split('x').map((x) => parseInt(x, 10)))
		.reduce((prev, [l, w, h]) => {
			return (prev += area(l, w, h) + min(l, w, h))
		}, 0)
}
