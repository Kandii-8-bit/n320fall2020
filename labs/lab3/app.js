class VendingMachine {
  constructor(name) {
    this.name = name;
    this.stock = 50;
    this.buy = 30;
  }
  render() {
    return `
          <div>${this.name}</div>
          <div>Stock: ${this.stock}</div>
          <div>Buy: ${this.buy}</div>
        `;
  }
  machineStock() {
    this.stock--;
  }

  buyStock() {
    this.buy--;
  }
}

let firstCandy = new VendingMachine("Skittles");
let candyDiv = document.getElementById("candyDiv");
candyDiv.innerHTML = firstCandy.render();

let secondCandy = new VendingMachine("Hershey Bar");
let candyDivTwo = document.getElementById("candyDivTwo");
candyDivTwo.innerHTML = secondCandy.render();

let firstChips = new VendingMachine("Potato Chips");
let chipsDiv = document.getElementById("chipsDiv");
chipsDiv.innerHTML = firstChips.render();

function machineStock() {
  firstCandy.machineStock();
  candyDiv.innerHTML = firstCandy.render();
  secondCandy.machineStock();
  candyDivTwo.innerHTML = secondCandy.render();
  firstChips.machineStock();
  chipsDiv.innerHTML = firstChips.render();
}

function buyStock() {
  firstCandy.buyStock();
  candyDiv.innerHTML = firstCandy.render();
  secondCandy.buyStock();
  candyDivTwo.innerHTML = secondCandy.render();
  firstChips.buyStock();
  chipsDiv.innerHTML = firstChips.render();
}
