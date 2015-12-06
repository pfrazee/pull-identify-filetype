var pull    = require('pull-stream')
var tape    = require('tape')
var tf      = require('test-files')
var ident   = require('../')
var mns     = require('../magic-numbers')

Object.keys(mns).forEach(function (mn) {
  var type = mns[mn]
  if (!tf.has(type))
    return

  tape('identify: '+type, function (t) {
    pull(
      tf.read(type),
      ident(function (type) {
        t.equal(type, type)
      }),
      pull.onEnd(t.end.bind(t))
    )
  })
})

tape('identify: svg', function (t) {
  pull(
    tf.read('svg'),
    ident(function (type) {
      t.equal(type, 'svg')
    }),
    pull.onEnd(t.end.bind(t))
  )
})
