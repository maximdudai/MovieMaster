export const getNumbersFromString = (str) => 
  str.match(/\d+/g).map(Number)

export const convertMinutesToHours = (min) =>
  Math.floor(min / 60) + 'h ' + min % 60 + 'm'

