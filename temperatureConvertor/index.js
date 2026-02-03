var temperatureConverter = {
  celsius: null,
  fahrenheit: null,
  kelvin: null,

  read: function () {
    this.celsius = Number(prompt("Enter temperature in Celsius"));

    if (isNaN(this.celsius)) {
      alert("Please enter a valid number!");
      this.celsius = null;
    }
  },

  check: function () {
    if (this.celsius === null) {
      alert("Please click READ first!");
      return false;
    }
    return true;
  },

  toFahrenheit: function () {
    if (!this.check()) return;

    this.fahrenheit = (this.celsius * 9 / 5) + 32;
    alert(`Temperature in Fahrenheit: ${this.fahrenheit}`);
  },

  toKelvin: function () {
    if (!this.check()) return;

    this.kelvin = this.celsius + 273.15;
    alert(`Temperature in Kelvin: ${this.kelvin}`);
  },

  display: function () {
    if (!this.check()) return;

    console.log("Celsius:", this.celsius);
    console.log("Fahrenheit:", this.fahrenheit);
    console.log("Kelvin:", this.kelvin);

    alert(
      `Celsius: ${this.celsius}\n` +
      `Fahrenheit: ${this.fahrenheit}\n` +
      `Kelvin: ${this.kelvin}`
    );
  }
};

document.getElementById("read").addEventListener("click", () => temperatureConverter.read());
document.getElementById("fahrenheit").addEventListener("click", () => temperatureConverter.toFahrenheit());
document.getElementById("kelvin").addEventListener("click", () => temperatureConverter.toKelvin());
document.getElementById("display").addEventListener("click", () => temperatureConverter.display());
