function beepBoop(value) {
  let valueToArray = [];
  for (let i=0; i<=value; i++) {
    valueToArray.push(i);
  }
  for (let j = 0; j <= valueToArray.length; j++) {
    if (valueToArray[j] == 1) {
      valueToArray[j] = "Beep!";
    }
  }
  console.log(valueToArray);
}