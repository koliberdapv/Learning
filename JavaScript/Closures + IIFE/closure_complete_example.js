// closure
function newAccount(name, initialBallance) {
  let balance = initialBallance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);
bob.showBalance();

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.balane = 1000000;
john.withdraw(1800);
