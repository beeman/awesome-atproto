import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { renderCategory } from './lib/helpers'
import { source } from './source'

const delimiterStart = '[//]: <> (START_GENERATED_SECTION)'
const delimiterEnd = '[//]: <> (END_GENERATED_SECTION)'

const readme = readFileSync('./README.md', 'utf8')

const firstPart = readme.split(delimiterStart)[0]
const secondPart = readme.split(delimiterEnd)[1]

const result: string[] = []

result.push(firstPart)
result.push(delimiterStart)

for (const category of source) {
  const strings = renderCategory(category)

  result.push(strings.join('\n'))
}

result.push(delimiterEnd)
result.push(secondPart)

console.log(result.join('\n'))

writeFileSync('./README.md', result.join('\n'))

execSync('prettier --write ./README.md')
console.log('Done!')
