const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];

function printForecast(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`... ${array[i]}°C in ${i + 1} days`);
  }
}

printForecast(dataOne);
printForecast(dataTwo);
