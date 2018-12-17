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

// servo
// - represents the servo attached to the raspberry-pi board
let servo = null;


// EVENT LISTENERS
// - Defines the functions that are listening for the generated events.

// ready
// - Execute tasks that must take place before the program can operante after
//   the board instance object has completed any hardware initialization.
board.on('ready', () => {
  // initialize
  servo = new five.Servo({
   id: 'sg90',        // User defined id
   pin: 'GPIO18',     // Which pin is it attached to?
   type: 'standard',  // Default: "standard". Use "continuous" for continuous rotation servos
   range: [0,180],    // Default: 0-180
   fps: 100,          // Used to calculate rate of movement between positions
   invert: false,     // Invert all specified positions
   startAt: 90,       // Immediately move to a degree
   center: true,      // overrides startAt if true and moves the servo to the center of the range
 })

 board.repl.inject({ servo })
})

// exit
// - Execute cleanup task before your program is 'disconnected' from the board
board.on('exit', () => {
  servo.home()
})
