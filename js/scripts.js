function beepBoop(value) {
  const valueArray = [];
  const finalArray = [];
  for (let i = 0; i <= value; i++) {
    valueArray.push(i);
  }
  const stringArray = valueArray.map(String);
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes("3")) {
      finalArray.push("Won't you be my *bzzt* neighbor?");
    } else if (stringArray[i].includes("2")) {
      finalArray.push("Boop!");
    } else if (stringArray[i].includes("1")) {
      finalArray.push("Beep!");
    } else {
      (finalArray.push(stringArray[i]));
    }  
  }
  return finalArray.join(" ,  ");
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const userInput = parseInt($("input#number").val());
    const result = beepBoop(userInput);
    
    $("#result").show();
    $(".result").empty();
    $(".result").append(result);
    event.preventDefault();
  })
});