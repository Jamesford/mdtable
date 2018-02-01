const bpad = require('bpad')

function generateHeader (header, settings) {
  const headerStr = header
    .map(text => bpad(text, settings.padLength))
    .join('|')

  return settings.borders
    ? `|${headerStr}|`
    : headerStr
}

function generateAlignments (alignment, settings) {
  const alignmentStr = alignment
    .map(align => {
      switch (align) {
        case 'L':
          return `:${'-'.repeat(settings.padLength - 1)}`
        case 'C':
          return `:${'-'.repeat(settings.padLength - 2)}:`
        case 'R':
          return `${'-'.repeat(settings.padLength - 1)}:`
      }
    })
    .join('|')

  return settings.borders
    ? `|${alignmentStr}|`
    : alignmentStr
}

function generateRow (row, settings) {
  const rowStr = row
    .map(text => bpad(text, settings.padLength))
    .join('|')

  return settings.borders
    ? `|${rowStr}|`
    : rowStr
}

function generateRows (rows, settings) {
  return rows
    .map(row => generateRow(row, settings))
    .join('\n')
}

module.exports = function generateTable (table, settings) {
  const longest = [
    ...table.header,
    ...[].concat(...table.rows)
  ].reduce((acc, str) => str.length > acc ? str.length : acc, 1)

  const s = Object.assign({}, settings, {
    padLength: (settings.padding * 2) + longest
  })

  return [
    generateHeader(table.header, s),
    generateAlignments(table.alignment, s),
    generateRows(table.rows, s)
  ].join('\n')
}
