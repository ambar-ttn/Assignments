var calculator = {
  x: null,
  y: null,

  read: function () {
    this.x = Number(prompt("Enter the first value"));
    this.y = Number(prompt("Enter the second value"));

    if (isNaN(this.x) || isNaN(this.y)) {
      alert("Please enter valid numbers!");
      this.x = null;
      this.y = null;
    }
  },

  check: function () {
    if (this.x === null || this.y === null) {
      alert("Please click READ first!");
      return false;
    }
    return true;
  },

  add: function () {
    if (!this.check()) return;
    alert(`Addition: ${this.x + this.y}`);
  },

  subtract: function () {
    if (!this.check()) return;
    alert(`Subtraction: ${this.x - this.y}`);
  },

  multiply: function () {
    if (!this.check()) return;
    alert(`Multiplication: ${this.x * this.y}`);
  }
};

document.getElementById("read").addEventListener("click", () => calculator.read());
document.getElementById("add").addEventListener("click", () => calculator.add());
document.getElementById("subtract").addEventListener("click", () => calculator.subtract());
document.getElementById("multiply").addEventListener("click", () => calculator.multiply());
