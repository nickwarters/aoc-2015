import { readFileSync } from 'fs'

const testData = `2x3x4
1x1x10`

const expected = 34 + 14

console.log(
	`Example Input Solution = ${expected}, got: ${solution(testData)}`,
	solution(testData) === expected
)
console.log(
	'Full Input Solution',
	solution(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function bow(l: number, w: number, h: number) {
	return l * w * h
}

function len(sides: number[]) {
	return sides
		.sort((a, b) => a - b)
		.slice(0, 2)
		.reduce((prev, next) => {
			return (prev += next * 2)
		}, 0)
}

function solution(input: string): any {
	return input
		.split('\n')
		.map((r) => r.split('x').map((x) => parseInt(x, 10)))
		.reduce((prev, [l, w, h]) => {
			return (prev += len([l, w, h]) + bow(l, w, h))
		}, 0)
}
