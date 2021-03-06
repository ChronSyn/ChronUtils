# ChronUtils - A collection of useful utility scripts and functions

### ukBankHolidays.js
Calculates UK bank holidays and returns an array by passing an optional year argument


A second arg allows you to define if output should be in String format.
You may pass a blank string as year if you wish to use this arg along with the current year (without hardcoding the year).

######Usage: calculateBankHolidays(*[theYear, toStr]*);
######Example  : calculateBankHolidays(2016,true);
######Example 2: calculateBankHolidays("", true);


### calcInterest.js
Allows you to calculate interest per year based upon an initial investment


A second arg allows you to define if output should be in String format.
You may pass a blank string as year if you wish to use this arg along with the current year (without hardcoding the year).

######Usage: calcInterest(*intialInvestment, numYears, interestPerYear*);
######Example  : calcInterest(500, 6, 1.05); // 5% interest over 6 years on a 500 initial investment


##p5 Utils
### getPixelValues.js
Checks if a pixel at a particular index is part of a channel (rgba). Returns that pixel value (0-255) if it is, returns the value, else returns false.


######Usage: _getRed(*pixelInteger*); OR _getGreen(*pixelInteger*); OR _getBlue(*pixelInteger*); OR _getAlpha(*pixelInteger*);
######Example  : _getBlue(30); // Will return a value as pixel 30 is a pixel in the blue channel
######Example 2  : _getRed(30); // Will return false as pixel 30 is not in the red channel

Also provides a _getChannel(*pixelInteger*) function which returns a string of 'r', 'g', 'b', or 'a' representing the channel that pixel belongs to.

*(Examples above are based on test data, but should give you an idea how it works)*