'use strict'

// johnny-five and raspi-IO module dependencies
const five  = require('johnny-five')
const raspi = require('raspi-io')


// CONSTANTS DECLARATIONS
// - Declaration of constants used throughout the code

// board
// - represents the raspberry-pi board itself
const board = new five.Board({
  io: new raspi()
})
