class Glop {
  constructor(color) {
    this.color = color;
    console.log("Bwello");
  }
  delete() {
    console.log("Boodnight");
  }
}
const g = new Glop("#ff0000");
document.querySelector("p").addEventListener("click", () => {
  document.querySelector("p").style.color = g.color;
});