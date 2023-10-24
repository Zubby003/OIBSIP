const calculateTemp = () => {
  const degree = document.querySelector("#degreeInput").value;

  const temp = document.getElementById("selectTemp").value;

  // celsius to fahrenheit
  const celToFah = (cel) => {
    let fahrenheit = ((cel * 9) / 5 + 32).toFixed(1);
    return fahrenheit;
  };

  //  fahrenheit to celsius
  const fahToCel = (fah) => {
    let celsius = (((fah - 32) * 5) / 9).toFixed(1);
    return celsius;
  };

  if (temp === "cel") {
    document.querySelector(".output").innerHTML =
      celToFah(degree) + "&#176; Fahrenheit";
  } else {
    document.querySelector(".output").innerHTML =
      fahToCel(degree) + "&#176; Celsius";
  }
};
