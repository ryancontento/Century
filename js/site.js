// get values from interface
// starts OR controller function
function getValues() {
  // get values from page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // parse into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // call generateNumbers
    numbers = generateNumbers(startValue, endValue);
    // call displayNumbers
    displayNumbers(numbers);
  } else {
    alert("you must enter integers");
  }
}

// generate numbers from startValue to endValue and
// logic function(s)
function generateNumbers(sValue, eValue) {
  let numbers = [];

  for (let i = sValue; i <= eValue; i++) {
    numbers.push(i);
  }

  return numbers;
}
// display numbers and mark the even numbers bold
// display OR view function(s)
function displayNumbers(numbers) {
  let templateRows = "";
  for (let i = 0; i < numbers.length; i++) {
    let className = "even";
    let number = numbers[i];

    if (number % 2 === 0) {
      className = "even";
    } else {
      className = "odd";
    }
    templateRows += `<tr><td class=${className}>${number}</td></tr>`;
  }

  document.getElementById("results").innerHTML = templateRows;
}
