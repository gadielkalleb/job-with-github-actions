const { createReadStream, createWriteStream } = require('fs')
const { pipeline, Transform } = require('stream')

const streamA = createReadStream('package.json')

const streamB = new Transform({
  objectMode: true,
  transform(chunk, endonding, done) {
    this.push(chunk.toString().toUpperCase())
    done()
  }
})

const streamC = createWriteStream('package.uppercase.json')

const returnPipeline = pipeline(
  streamA,
  streamB,
  streamC,
  (err) => {
    console.log("🚀 ~ file: teste.js ~ line 9 ~ err", err)
  }
)

console.log("🚀 ~ file: teste.js ~ line 9 ~ returnPipeline", returnPipeline)
