import { readFileSync } from 'fs'

const testData = `()())`

const expected = 5

console.log(
	`Example Input Solution = ${expected}`,
	solution(testData) === expected
)
console.log(
	'Full Input Solution',
	solution(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function solution(inputText: string): any {
	const input = inputText.split('')

	let level: number = 0
	let i: number = 0

	while (level >= 0 && i < input.length) {
		const char = input[i++]
		level += char === '(' ? 1 : -1
	}

	return i
}
