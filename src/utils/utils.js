export const getNumbersFromString = (str) => 
  str.match(/\d+/g).map(Number)

export const convertMinutesToHours = (min) =>
  Math.floor(min / 60) + 'h ' + min % 60 + 'm'


export const getQueryParamsFromUrl = (search) => search.split("=")[1];

export const isImageAvailable = (image) => {
  const isNull = image?.substr(image.length - 4) === 'null';

  return isNull
    ? "https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
    : image;
}