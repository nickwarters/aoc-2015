import { readFileSync } from 'fs'
import { createHash } from 'crypto'

const tests: [string, any][] = [
	[`abcdef`, 609043],
	['pqrstuv', 1048970],
]

tests.forEach(([testData, expected]) => {
	const result = solution(testData)
	console.log(
		`Example Input Solution - Expected: ${expected}, Got: ${result}, ${
			result === expected ? 'PASS' : 'FAIL'
		}`
	)
})

console.log(
	'Full Input Solution',
	solution(readFileSync('./input.txt', { encoding: 'utf-8' }))
)
function md5(input: string) {
	return createHash('md5').update(input).digest('hex')
}

function checkMatch(input: string) {
	return input.startsWith('00000')
}
function solution(input: string): any {
	let count = 0
	while (!checkMatch(md5(`${input}${count}`))) count++

	return count
}
