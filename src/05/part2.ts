import { readFileSync } from 'fs'

const tests: [string, any][] = [
	[
		`qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`,
		2,
	],
]

function hasPair(input: string) {
	return input.match(/(..).*\1/)
}

function letterBetweenPair(input: string) {
	return input.match(/(.).\1/)
}

function isNice(input: string): boolean {
	return !!hasPair(input)?.length && !!letterBetweenPair(input)?.length
}

tests.forEach(([testData, expected]) => {
	const result = solve(testData)
	console.log(
		`Example Input Solution - Expected: ${expected}, Got: ${result}, ${
			result === expected ? 'PASS' : 'FAIL'
		}`
	)
})

console.log(
	'Full Input Solution',
	solve(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function solve(input: string): any {
	return input.split('\n').filter(isNice).length
}
