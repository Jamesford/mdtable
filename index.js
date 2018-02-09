const bpad = require('bpad')

function generateHeader (header, settings) {
  const headerStr = header
    .map((text, i) => bpad(text, settings.padLength[i]))
    .join('|')

  return settings.borders
    ? `|${headerStr}|`
    : headerStr
}

function generateAlignments (alignment, settings) {
  const alignmentStr = alignment
    .map((align, i) => {
      switch (align) {
        case 'L':
          return `:${'-'.repeat(settings.padLength[i] - 1)}`
        case 'C':
          return `:${'-'.repeat(settings.padLength[i] - 2)}:`
        case 'R':
          return `${'-'.repeat(settings.padLength[i] - 1)}:`
      }
    })
    .join('|')

  return settings.borders
    ? `|${alignmentStr}|`
    : alignmentStr
}

function generateRow (row, settings) {
  const rowStr = row
    .map((text, i) => bpad(text, settings.padLength[i]))
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
  const columns = table.header.length

  const longest = [
    ...table.header,
    ...[].concat(...table.rows)
  ].reduce((acc, str, idx) => {
    // need a column index,
    // not an index of the array of everything
    const i = idx % columns

    // Mutation :(
    if (str.length > acc[i]) acc[i] = str.length
    return acc
  }, new Array(columns).fill(1))

  const s = Object.assign({}, settings, {
    padLength: longest.map(columnLongest => (settings.padding * 2) + columnLongest)
  })

  return [
    generateHeader(table.header, s),
    generateAlignments(table.alignment, s),
    generateRows(table.rows, s)
  ].join('\n')
}
