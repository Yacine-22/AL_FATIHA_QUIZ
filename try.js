












function arrayOfNumAya() {
  let array = [];
  for (let i = 1; i <= 7; i++) {
    array.push('00' + i)
  }
  return array
}

function randomNNum(min, max) {
  let betw = (max - min) + 1;
  return Math.floor(Math.random() * betw) + min;
}