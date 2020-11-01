function beepBoop(value) {
  const valueArray = [];
  //let stringArray = [];
  for (let i = 0; i <= value; i++) {
    valueArray.push(i);
  }
  const stringArray = valueArray.map(String);
  console.log(valueArray);
  console.log(stringArray);
  const finalArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes("1")) {
      finalArray.push("Beep!");
    } else if (stringArray[i].includes("2")) {
      finalArray.push("Boop!");
    } else if (stringArray[i].includes("3")) {
      finalArray.push("Won't you be my *bzzt* neighboor?");
    } else {
      (finalArray.push(stringArray[i]));
    }  
  }
  console.log(finalArray);
}