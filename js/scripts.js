function beepBoop(value) {
  let valueToArray = [];
  for (let i=0; i<=value; i++) {
    valueToArray.push(i);
  }
  /*for (let i = 0; i <= valueToArray.length; i++) {
    if (valueToArray[i] == 1) {
      valueToArray[i] = "Beep!";
    } else if (valueToArray[i] == 2) {
      valueToArray[i] = "Boop"
    } else if (valueToArray[i] == 3) {
      valueToArray[i] = "Won't you be my neighbor"
    }
  }*/
  console.log(valueToArray);
}