var hex1;
var hex2;
var hex3;

function convertBackground() {
  hex1 = document.getElementById('inputHex1').value;
    hex1 = parseInt(hex1);
    hex1 = hex1.toString(16);
    console.log(hex1);
  hex2 = document.getElementById('inputHex2').value;
    hex2 = parseInt(hex2);
    hex2 = hex2.toString(16);
    console.log(hex2);
  hex3 = document.getElementById('inputHex3').value;
    hex3 = parseInt(hex3);
    hex3 = hex3.toString(16);
    console.log(hex3);

  if (hex1.length >= 3 || hex2.length >= 3 || hex3.length >= 3) {
    alert("Your values are too large, try again with numbers between 0 and 255");
  }

  if (hex1.length === 1) {
    hex1 = "0" + hex1;
  }
  if (hex2.length === 1) {
    hex2 = "0" + hex2;
  }
  if (hex3.length === 1) {
    hex3 = "0" + hex3;
  }
    console.log(hex1);
    console.log(hex2);
    console.log(hex3);
var hexfinal = "#" + hex1 + hex2 + hex3;
  document.getElementById('body1').style.backgroundColor = hexfinal;
  document.getElementById('hexadec').innerHTML = "Your hex is: " + hexfinal;
}

function convertNumber() {
  var startNum = document.getElementById('firstNumber').value;
  var startBase = document.getElementById('startB').value;
  var endBase = document.getElementById('endB').value;
  var finalNum = 0;
  startNum = startNum.toString();
    console.log(startNum);
  startBase = parseInt(startBase);
    console.log(startBase);
  endBase = parseInt(endBase);
    console.log(endBase);
    var arrayCounter = 0;
    var tempArray = startNum.charAt(0);
    var arrayOne = [tempArray];
  while (startNum.length > arrayCounter + 1) {
    arrayCounter++;
    var tempArray = startNum.charAt(arrayCounter);
    arrayOne.push(tempArray);
  }
    console.log(arrayOne);
    arrayCounter = 0;
  while (arrayOne.length >= arrayCounter + 1) {
    finalNum = finalNum + parseInt(arrayOne[arrayCounter]) * (Math.pow(startBase, arrayOne.length - (arrayCounter + 1) ) );
    arrayCounter++;
  }
  arrayCounter = 0;
    console.log(finalNum);
  var divisorNum;
  var remainderNum = finalNum;
  var arrayTwo = [];
  var arrayTest = 0;
  arrayEnd = 100;

  while (arrayEnd > 0 || arrayEnd === 0) {
    var arrayEnd = 100 - arrayCounter;
    divisorNum = Math.floor(remainderNum / Math.pow(endBase, arrayEnd) );

    if (divisorNum > 0) {
      arrayTest = 1;
    }

      if (arrayTest === 1) {
        remainderNum = remainderNum % (Math.pow(endBase, arrayEnd) );
        arrayTwo.push(divisorNum);
      }

        divisorNum = remainderNum;

      if (divisorNum === 0 && arrayEnd === 0) {
        break;
      }
    arrayCounter++;
  }

  console.log(arrayTwo);

      var i = 0;
      var finalAnswer = " ";
        console.log(arrayTwo.length);
    while (arrayTwo.length >= i + 1) {
      finalAnswer = finalAnswer + arrayTwo[i];
      i++;
      console.log(finalAnswer);
    }
    document.getElementById('finalAns').innerHTML = "your number " + startNum + " in base " + startBase + " is equal to" + finalAnswer + " in base " + endBase;

  /* startNum = parseInt(startNum, startBase);
    console.log("start product" + startNum);
  startNum = startNum.toString(endBase);
    console.log("end product " + startNum);
  alert(startNum); */
}
