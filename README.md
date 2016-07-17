# ChronUtils - A collection of useful utility scripts and functions

### ukBankHolidays.js
Calculates UK bank holidays and returns an array by passing an optional year argument


A second arg allows you to define if output should be in String format.
You may pass a blank string as year if you wish to use this arg along with the current year (without hardcoding the year).

######Usage: calculateBankHolidays(*[theYear, toStr]*);
######Example  : calculateBankHolidays(2016,true);
######Example 2: calculateBankHolidays("", true);
