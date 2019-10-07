# hw4
Includes answers to questions, changes to programs and practice with arrays.

Part 1:
  1) Since the refresh rate is set to a default based on the computer's display of 60 hz, the program draws the lines 60 times a second. In other words, the frame rate is set to 60 frames per second. 
  
  2) The first (10) on line 8 sets where the first line ends on the canvas. All the lines start at (0, 0) in the top left and the first line lands 10 pixels away from the left edge of the canvas. 
     The second (10) on line 8 sets whete the last line ends on the canvas relative to the x-axis. In this case, the last line ends 10 pixels away from the right edge of the canvas, since var(x = 10) in the equation x < width-10 would set the last line to end at 390 pixels (the canvas is set to (400, 400)).
     The third and final (10) changes the spacing and therefore the amount of lines on the canvas. For instance, changing only this (10) to (50) would cause only 8 lines to appear.
     
     
Part 2:
  1) The loop body runs at a rate of 60 frames per second.
  2) On line 16, you can change the (10) to any number above 10 to increase the spacing. The second way to change the spacing would be to multiply the constant by any number greater/smaller than 1. 
  3) To increase the trail, change the value in the x.slice() and y.slice() to both be above 50.
