var pull = require('pull-stream')
var mns  = require('./magic-numbers')

module.exports = function (cb) {
  var done = false
  return pull.through(function (buf) {
    if (done) return
    done = true

    if (!Buffer.isBuffer(buf))
      return cb(false)

    // compare the first bytes against the magic numbers
    var hex = buf.slice(0, (buf.length > 10) ? 10 : buf.length).toString('hex')
    for (var magicNumber in mns) {
      if (hex.indexOf(magicNumber) === 0)
        return cb(mns[magicNumber])
    }
    cb(false)
  })
}