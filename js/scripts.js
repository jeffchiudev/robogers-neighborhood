const array = [];
function beepBoop(value) {
  for (let i = 0; i <= value; i++) {
    array.push(i);
  }
  const roboArray = array.map(function(element) {
    if (element.includes(1)) {
      return element = "Beep!"
    }
  })
  return roboArray;
}

