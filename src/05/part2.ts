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
	// let hasPair = false
	// const seen = new Set()
	// for (let i = 3; i < input.length; i++) {
	// 	if (hasPair) break
	// 	const slice = `${input.charAt(i - 1)}${input.charAt(i)}`
	// 	hasPair = seen.has(slice)
	// 	seen.add(slice)
	// }
	return input.match(/(..).*\1/)
}

function letterBetweenPair(input: string) {
	return input.match(/(.).\1/)
}

function isNice(input: string): boolean {
	const pair = hasPair(input)
	const letterBetween = letterBetweenPair(input)
	// console.log(input, letterBetween, pair)

	return !!pair && !!pair.length && !!letterBetween && !!letterBetween.length
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
