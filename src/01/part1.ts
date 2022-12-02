import { readFileSync } from 'fs'

const testData = `)())())`

const expected = -3

console.log(
	`Example Input Solution = ${expected}`,
	solution(testData) === expected
)
console.log(
	'Full Input Solution',
	solution(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function solution(input: string): any {
	return input.split('').reduce((prev, current) => {
		return (prev += current === '(' ? 1 : -1)
	}, 0)
}
