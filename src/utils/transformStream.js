const { Transform } = require('stream')

const transformStream = (transformFn) => new Transform({
  objectMode: true,
  transform: transformFn
})

module.exports = transformStream
